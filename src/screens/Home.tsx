import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  NativeEventEmitter,
  EmitterSubscription,
  NativeModules,
  PermissionsAndroid,
  Platform,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
// @ts-ignore
import { stringToBytes } from 'convert-string';
// @ts-ignore
import bytesCounter from 'bytes-counter';
import hexRgb from 'hex-rgb';
import { ReduxState, SettingState } from '../types/types';
import StarTopBgImage from '../assets/png/star_top_bg.png';
import LightTopBgImage from '../assets/png/light_top_bg.png';
import AppBgImage from '../assets/png/app_bg.png';
import TouchButton from '../components/button/TouchButton';
import LightSwitch from '../components/switch/LightSwitch';
import LightSlider from '../components/slider/LightSlider';
import Colors from '../styles/colors';
import StarEffect from './components/StarEffect';
import StarColor from './components/StarColor';
import AmbientEffect from './components/AmbientEffect';
import AmbientColor from './components/AmbientColor';
import CustomColor from './components/CustomColor';
import BleManager, { Peripheral } from 'react-native-ble-manager';
import ButtonIcon from '../components/Icon/ButtonIcon';
import { ScreenHeight } from '../utils/ScreenUtil';
import ShootingColor from './components/ShootingColor';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

interface Props {}

interface State {
  showMenu: boolean;
  showStarEffect: boolean;
  showStarColor: boolean;
  showShootingStar: boolean;
  showAmbientEffect: boolean;
  showAmbientColor: boolean;
  showCustomColor: boolean;
  ambientSpeedValue: number;
  ambientDimValue: number;
  starDimValue: number;
  shootingStarValue: number;
  starIconName: string;
  starColorName: string;
  shootingColorName: string;
  ambientIconName: string;
  ambientColorName: string;
  starDisabled: boolean;
  ambientDisabled: boolean;
  selectedShootingMode: string;
}
class Home extends Component<Props, State> {
  handleDiscover: EmitterSubscription;
  connectedPeripheral: Peripheral | null;

  constructor(props: Props) {
    super(props);

    this.state = {
      showMenu: false,
      showStarEffect: false,
      showStarColor: false,
      showShootingStar: false,
      showAmbientEffect: false,
      showAmbientColor: false,
      showCustomColor: false,
      ambientSpeedValue: 0,
      ambientDimValue: 0,
      starDimValue: 0,
      shootingStarValue: 0,
      starIconName: 'StarIcon',
      ambientIconName: 'FadeIcon',
      starColorName: 'white',
      shootingColorName: 'white',
      ambientColorName: 'white',
      starDisabled: false,
      ambientDisabled: false,
      selectedShootingMode: '1',
    };

    this.connectedPeripheral = null;

    this.handleDiscover = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoverPeripheral,
    );

    bleManagerEmitter.addListener('BleManagerDidUpdateState', args => {
      const { state } = args;
      console.log(state);
      if (state === 'on') {
        BleManager.scan([], 15, true).then(() => {
          // Success code
          console.log('Scan started');
        });
      }
    });
  }

  componentDidMount() {
    // android only
    BleManager.enableBluetooth()
      .then(() => {
        console.log('Bluetooth is already enabled');
      })
      .catch(error => {
        console.log(error);
        console.log('You need to enable bluetooth to use this app.');
      });

    BleManager.start({ showAlert: true }).then(() => {
      console.log('BLuetooth initialized');

      // BleManager.scan([], 15, true).then(() => {
      //   // Success code
      //   console.log('Scan started');
      // });
    });

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.requestPermission(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('User accept');
              BleManager.scan([], 15, true).then(() => {
                // Success code
                console.log('Scan started');
              });
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }
  }

  // bluetooth

  handleDiscoverPeripheral = async (peripheral: Peripheral) => {
    try {
      if (peripheral.name && peripheral.name.includes('starkit')) {
        await BleManager.stopScan();
        console.log(peripheral);
        // connect
        await BleManager.connect(peripheral.id);

        BleManager.retrieveServices(peripheral.id).then(peripheralInfo => {
          // Success code
          console.log('Peripheral info:', peripheralInfo);
        });

        BleManager.getConnectedPeripherals([]).then(results => {
          if (results.length == 0) {
            console.log('No connected peripherals');
            this.connectedPeripheral = null;
          }
          console.log('Connected peripherals');
          this.connectedPeripheral = peripheral;
          Alert.alert('Connected');
        });
      } else {
        console.log(peripheral.name);
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleWrite = (command: string) => {
    if (!this.connectedPeripheral) return;

    const peripheralId = this.connectedPeripheral.id;

    BleManager.retrieveServices(peripheralId).then(peripheralInfo => {
      // Success code
      console.log('Peripheral info:', peripheralInfo);

      const service = 'FFE0';
      const characteristic = 'FFE1';

      const data = stringToBytes(command);
      const bytes = bytesCounter.count(command);

      BleManager.writeWithoutResponse(
        peripheralId,
        service,
        characteristic,
        data,
        bytes,
      )
        .then(() => {
          console.log('Sent ' + command);
        })
        .catch(error => {
          // Failure code
          console.log(error);
        });
    });
  };

  // render
  renderStarTitle = () => {
    const { showStarEffect, showStarColor, showShootingStar } = this.state;

    if (showStarEffect) return 'Starry Night Effects';
    if (showStarColor) return 'Starry Night Colors';
    if (showShootingStar) return 'Shooting Star';
    return 'Stars';
  };

  renderStar = () => {
    const {
      showStarEffect,
      showStarColor,
      showShootingStar,
      starIconName,
      starColorName,
      shootingColorName,
      starDisabled,
      starDimValue,
      selectedShootingMode,
      shootingStarValue,
    } = this.state;

    if (showStarEffect)
      return (
        <StarEffect
          selectedIcon={starIconName}
          onPressTwinkle={() => {
            this.setState({ starIconName: 'TwinkleIcon' });
            this.handleWrite('T');
          }}
          onPressFirefly={() => {
            this.setState({ starIconName: 'FireflyIcon' });
            this.handleWrite('F');
          }}
          onPressRandom={() => {
            this.setState({ starIconName: 'RandomIcon' });
            this.handleWrite('R');
          }}
          onPressRainDrops={() => {
            this.setState({ starIconName: 'RainDropsIcon' });
            this.handleWrite('D');
          }}
          onPressBreeze={() => {
            this.setState({ starIconName: 'BreezeIcon' });
            this.handleWrite('B');
          }}
          onPressJamboree={() => {
            this.setState({ starIconName: 'JamboreeIcon' });
            this.handleWrite('J');
          }}
        />
      );

    if (showStarColor)
      return (
        <StarColor
          selectedColor={starColorName}
          onPress={(color: string) => {
            console.log(color);
            if (color === 'Rainbow') {
              this.setState({ starColorName: 'red' });
              this.handleWrite('w');
              return;
            }

            if (color === 'RainbowLight') {
              this.setState({ starColorName: 'blue' });
              this.handleWrite('f');
              return;
            }

            if (color === 'RainbowLoad') {
              this.setState({ starColorName: 'green' });
              this.handleWrite('r');
              return;
            }

            if (color === 'RainbowEye') {
              this.setState({ starColorName: 'purple' });
              this.handleWrite('b');
              return;
            }

            this.setState({ starColorName: color });
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'c,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
            console.log(command);
            this.handleWrite(command);
          }}
        />
      );

    if (showShootingStar)
      return (
        <ShootingColor
          selectedMode={selectedShootingMode}
          selectedColor={shootingColorName}
          onPress={(color: string) => {
            console.log(color);
            if (color === 'red') {
              this.setState({ shootingColorName: color });
              const command =
                'S,' +
                selectedShootingMode +
                ',300,300,300,' +
                shootingStarValue;
              console.log(command);
              this.handleWrite(command);
              return;
            }
            this.setState({ shootingColorName: color });
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'S,' +
              selectedShootingMode +
              ',' +
              rgbColor.red +
              ',' +
              rgbColor.green +
              ',' +
              rgbColor.blue +
              ',' +
              shootingStarValue;
            console.log(command);
            this.handleWrite(command);
          }}
          onPressText={(text: string) => {
            console.log(text);
            this.setState({ selectedShootingMode: text });
            if (shootingColorName === 'white') {
              // didn't choose any color yet
              return;
            }

            if (shootingColorName === 'red') {
              // choose rainbow
              const command =
                'S,' +
                selectedShootingMode +
                ',300,300,300,' +
                shootingStarValue;
              console.log(command);
              this.handleWrite(command);
              return;
            }
            const rgbColor = hexRgb(shootingColorName);
            console.log(rgbColor);
            const command =
              'S,' +
              selectedShootingMode +
              ',' +
              rgbColor.red +
              ',' +
              rgbColor.green +
              ',' +
              rgbColor.blue +
              ',' +
              shootingStarValue;
            console.log(command);
            this.handleWrite(command);
          }}
          sliderValue={shootingStarValue}
          onChange={(value: number) => {
            console.log(Math.round(value));
            this.setState({ shootingStarValue: Math.round(value) });
            if (shootingColorName === 'white') {
              // didn't choose any color yet
              return;
            }

            if (shootingColorName === 'red') {
              // choose rainbow
              const command =
                'S,' +
                selectedShootingMode +
                ',300,300,300,' +
                shootingStarValue;
              console.log(command);
              this.handleWrite(command);
              return;
            }
            const rgbColor = hexRgb(shootingColorName);
            console.log(rgbColor);
            const command =
              'S,' +
              selectedShootingMode +
              ',' +
              rgbColor.red +
              ',' +
              rgbColor.green +
              ',' +
              rgbColor.blue +
              ',' +
              Math.round(value);
            console.log(command);
            this.handleWrite(command);
          }}
        />
      );

    return (
      <View style={{ marginHorizontal: '10%' }}>
        <TouchButton
          containerStyle={{
            marginVertical: 0.015 * ScreenHeight,
            height: 0.06 * ScreenHeight,
          }}
          iconName={starIconName}
          textLabel="Starry Night Effects"
          onPress={() => this.setState({ showStarEffect: true })}
          disabled={starDisabled}
        />
        <TouchButton
          containerStyle={{
            marginVertical: 0.015 * ScreenHeight,
            height: 0.06 * ScreenHeight,
          }}
          iconName="StarColorIcon"
          iconColor={starColorName}
          textLabel="Starry Night Colors"
          onPress={() => this.setState({ showStarColor: true })}
          disabled={starDisabled}
        />
        <TouchButton
          containerStyle={{
            marginVertical: 0.015 * ScreenHeight,
            height: 0.06 * ScreenHeight,
          }}
          iconName="ShootingStarIcon"
          iconColor={shootingColorName}
          textLabel="Shooting Star"
          onPress={() => this.setState({ showShootingStar: true })}
          disabled={starDisabled}
        />
        <View style={{ marginTop: 5, height: 40 }}>
          <LightSwitch
            onChange={(switchState: boolean) => {
              console.log(switchState);
              if (switchState) {
                // on state
                this.setState({ starDisabled: false });
                this.handleWrite('T');
              } else {
                // off state
                this.setState({ starDisabled: true });
                this.handleWrite('O');
              }
            }}
          />
        </View>
        <View>
          <LightSlider
            disabled={starDisabled}
            textLabel="Dim"
            minNumber={starDimValue}
            sliderValue={0}
            onChange={(value: number) => {
              console.log(Math.round(value));
              this.setState({ starDimValue: Math.round(value) });
            }}
          />
        </View>
      </View>
    );
  };

  renderAmbientTitle = () => {
    const { showAmbientEffect, showAmbientColor, showCustomColor } = this.state;

    if (showAmbientEffect) return 'Ambient Light Effects';
    if (showAmbientColor) return 'Ambient Light Colors';
    if (showCustomColor) return 'Ambient Custom Color';
    return 'Ambient Light';
  };

  renderAmbient = () => {
    const {
      showAmbientEffect,
      showAmbientColor,
      showCustomColor,
      ambientDimValue,
      ambientSpeedValue,
      ambientIconName,
      ambientColorName,
      ambientDisabled,
    } = this.state;

    if (showAmbientEffect)
      return (
        <AmbientEffect
          selectedIcon={ambientIconName}
          onPressFade={() => {
            this.setState({ ambientIconName: 'FadeIcon' });
            this.handleWrite('e,' + ambientSpeedValue);
          }}
          onPressBlink={() => {
            this.setState({ ambientIconName: 'BlinkIcon' });
            this.handleWrite('k,' + ambientSpeedValue);
          }}
          onPressNoEffect={() => {
            this.setState({ ambientIconName: 'NoEffectIcon' });
            this.handleWrite('n');
          }}
        />
      );

    if (showAmbientColor)
      return (
        <AmbientColor
          selectedColor={ambientColorName}
          onPress={(color: string) => {
            this.setState({ ambientColorName: color });
            console.log(color);
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'A,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
            console.log(command);
            this.handleWrite(command);
          }}
          onCustom={() =>
            this.setState({ showAmbientColor: false, showCustomColor: true })
          }
        />
      );

    if (showCustomColor)
      return (
        <CustomColor
          onChange={(color: string) => {
            this.setState({ ambientColorName: color });
            console.log(color);
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'A,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
            console.log(command);
            this.handleWrite(command);
          }}
        />
      );

    return (
      <View style={{ marginHorizontal: '10%' }}>
        <TouchButton
          containerStyle={{
            marginVertical: 0.015 * ScreenHeight,
            height: 0.055 * ScreenHeight,
          }}
          iconName={ambientIconName}
          textLabel="Ambient Light Effects"
          onPress={() => this.setState({ showAmbientEffect: true })}
          disabled={ambientDisabled}
        />
        <TouchButton
          containerStyle={{
            marginVertical: 0.015 * ScreenHeight,
            height: 0.055 * ScreenHeight,
          }}
          iconName="AmbientColorIcon"
          iconColor={ambientColorName}
          textLabel="Ambient Light Colors"
          onPress={() => this.setState({ showAmbientColor: true })}
          disabled={ambientDisabled}
        />
        <View>
          <LightSwitch
            onChange={(switchState: boolean) => {
              console.log(switchState);
              if (switchState) {
                // on state
                this.setState({ ambientDisabled: false });
                this.handleWrite('A,0,0,255');
              } else {
                // off state
                this.setState({ ambientDisabled: true });
                this.handleWrite('n');
              }
            }}
          />
        </View>
        <View style={{ marginTop: 2 }}>
          <LightSlider
            disabled={ambientDisabled}
            textLabel="Speed"
            minNumber={ambientSpeedValue}
            sliderValue={0}
            onChange={(value: number) => {
              console.log(Math.round(value));
              this.setState({ ambientSpeedValue: Math.round(value) });
              this.handleWrite('s,' + Math.round(value));
            }}
          />
          <LightSlider
            disabled={ambientDisabled}
            textLabel="Dim"
            minNumber={ambientDimValue}
            sliderValue={0}
            onChange={(value: number) => {
              console.log(Math.round(value * 100));
              this.setState({ ambientDimValue: Math.round(value) });
              this.handleWrite('d,' + Math.round(value));
            }}
          />
        </View>
      </View>
    );
  };

  renderMenu = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 45,
          backgroundColor: 'white',
          left: 0,
          borderWidth: 1,
          borderColor: Colors.menu,
          width: 140,
          height: 50,
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Linking.openSettings();
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ButtonIcon
              size={40}
              color={this.connectedPeripheral ? Colors.menu : Colors.disabled}
              name="BluetoothIcon"
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                color: this.connectedPeripheral ? Colors.menu : Colors.disabled,
              }}>
              {this.connectedPeripheral ? 'PAIRED' : 'CONNECT'}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    const {
      showStarEffect,
      showStarColor,
      showShootingStar,
      showAmbientEffect,
      showAmbientColor,
      showCustomColor,
      showMenu,
    } = this.state;

    return (
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={AppBgImage}
          style={{ width: '100%', height: '100%' }}>
          <View style={styles.starContainer}>
            <View style={{ flex: 1 }}>
              <ImageBackground
                style={{ height: 45, width: '100%' }}
                source={StarTopBgImage}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showMenu: !showMenu });
                  }}
                  style={{
                    backgroundColor: Colors.menu,
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ButtonIcon name="MenuIcon" />
                </TouchableOpacity>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: Colors.white,
                  }}>
                  {this.renderStarTitle()}
                </Text>
                {(showStarEffect || showStarColor || showShootingStar) && (
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 20,
                      top: 15,
                    }}
                    onPress={() =>
                      this.setState({
                        showStarColor: false,
                        showStarEffect: false,
                        showShootingStar: false,
                      })
                    }>
                    <ButtonIcon
                      name="CloseIcon"
                      size={20}
                      style={{
                        alignSelf: 'center',
                      }}
                    />
                  </TouchableOpacity>
                )}
              </ImageBackground>
              {this.renderStar()}
              {showMenu && this.renderMenu()}
            </View>
          </View>
          <View style={styles.lightContainer}>
            <View style={{ flex: 1 }}>
              <ImageBackground
                style={{ height: 45, width: '100%' }}
                source={LightTopBgImage}>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: Colors.white,
                  }}>
                  {this.renderAmbientTitle()}
                </Text>
                {(showAmbientEffect || showAmbientColor || showCustomColor) && (
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 20,
                      top: 15,
                    }}
                    onPress={() =>
                      this.setState({
                        showAmbientEffect: false,
                        showAmbientColor: false,
                        showCustomColor: false,
                      })
                    }>
                    <ButtonIcon
                      name="CloseIcon"
                      size={20}
                      style={{
                        alignSelf: 'center',
                      }}
                    />
                  </TouchableOpacity>
                )}
              </ImageBackground>
              {this.renderAmbient()}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ setting }: { setting: SettingState }) => {
  return {
    plaidConfig: setting.phone,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<ReduxState, any, AnyAction>,
) => {
  return {};
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  starContainer: {
    height: '46%',
    flex: 1,
  },
  lightContainer: {
    height: '46%',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
