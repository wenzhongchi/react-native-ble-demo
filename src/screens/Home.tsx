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
  showStarEffect: boolean;
  showStarColor: boolean;
  showShootingStar: boolean;
  showAmbientEffect: boolean;
  showAmbientColor: boolean;
  showCustomColor: boolean;
  speedValue: number;
  dimValue: number;
  starIconName: string;
  starColorName: string;
  shootingColorName: string;
  ambientIconName: string;
  ambientColorName: string;
  starDisabled: boolean;
  ambientDisabled: boolean;
}
class Home extends Component<Props, State> {
  handleDiscover: EmitterSubscription;
  connectedPeripheral: Peripheral | null;

  constructor(props: Props) {
    super(props);

    this.state = {
      showStarEffect: false,
      showStarColor: false,
      showShootingStar: false,
      showAmbientEffect: false,
      showAmbientColor: false,
      showCustomColor: false,
      speedValue: 10,
      dimValue: 10,
      starIconName: 'StarIcon',
      ambientIconName: 'FadeIcon',
      starColorName: 'white',
      shootingColorName: 'white',
      ambientColorName: 'white',
      starDisabled: false,
      ambientDisabled: false,
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

      BleManager.scan([], 15, true).then(() => {
        // Success code
        console.log('Scan started');
      });
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
    const { showStarEffect, showStarColor } = this.state;

    if (showStarEffect) return 'Starry Night Effects';
    if (showStarColor) return 'Starry Night Colors';
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
    } = this.state;

    if (showStarEffect)
      return (
        <StarEffect
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
            this.handleWrite('L');
          }}
          onPressBreeze={() => {
            this.setState({ starIconName: 'BreezeIcon' });
            this.handleWrite('Z');
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
          onPress={(color: string) => {
            console.log(color);
            this.setState({ starColorName: color });
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'S,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
            console.log(command);
            this.handleWrite(command);
          }}
        />
      );

    if (showShootingStar)
      return (
        <ShootingColor
          onPress={(color: string) => {
            console.log(color);
            this.setState({ shootingColorName: color });
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'S,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
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
          iconName="ColorStarIcon"
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
      </View>
    );
  };

  renderAmbientTitle = () => {
    const { showAmbientEffect, showAmbientColor, showCustomColor } = this.state;

    if (showAmbientEffect) return 'Ambient Light Effects';
    if (showAmbientColor) return 'Ambient Light Colors';
    if (showCustomColor) return 'Ambient Custom';
    return 'Ambient Light';
  };

  renderAmbient = () => {
    const {
      showAmbientEffect,
      showAmbientColor,
      showCustomColor,
      speedValue,
      dimValue,
      ambientIconName,
      ambientColorName,
      ambientDisabled,
    } = this.state;

    if (showAmbientEffect)
      return (
        <AmbientEffect
          onPressFade={() => {
            this.setState({ ambientIconName: 'FadeIcon' });
            this.handleWrite('F,');
          }}
          onPressBlink={() => {
            this.setState({ ambientIconName: 'BlinkIcon' });
            this.handleWrite('B,');
          }}
          onPressNoEffect={() => {
            this.setState({ ambientIconName: 'NoEffectIcon' });
            this.handleWrite('N');
          }}
        />
      );

    if (showAmbientColor)
      return (
        <AmbientColor
          onPress={(color: string) => {
            this.setState({ ambientColorName: color });
            console.log(color);
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'C,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
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
            console.log(color);
            this.setState({ ambientColorName: color });
          }}
        />
      );

    return (
      <View style={{ marginHorizontal: '10%' }}>
        <TouchButton
          containerStyle={{ marginVertical: 6, height: 0.05 * ScreenHeight }}
          iconName={ambientIconName}
          textLabel="Ambient Light Effects"
          onPress={() => this.setState({ showAmbientEffect: true })}
          disabled={ambientDisabled}
        />
        <TouchButton
          containerStyle={{ marginVertical: 6, height: 0.05 * ScreenHeight }}
          iconName="EffectsColorIcon"
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
                this.handleWrite('o');
              } else {
                // off state
                this.setState({ ambientDisabled: true });
                this.handleWrite('T');
              }
            }}
          />
        </View>
        <View>
          <LightSlider
            textLabel="Speed"
            minNumber={speedValue}
            sliderValue={10}
            onChange={(value: number) => {
              console.log(Math.round(value));
              this.setState({ speedValue: Math.round(value) });
            }}
          />
          <LightSlider
            textLabel="Dim"
            minNumber={dimValue}
            sliderValue={10}
            onChange={(value: number) => {
              console.log(Math.round(value * 100));
              this.setState({ dimValue: Math.round(value) });
            }}
          />
        </View>
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
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 8,
                    fontSize: 22,
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
                    marginTop: 8,
                    fontSize: 25,
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
          <View style={styles.statusContainer}>
            <View style={styles.bluetoothButton}>
              <ButtonIcon
                disableScale
                size={50}
                name="BluetoothIcon"
                color={this.connectedPeripheral ? 'orange' : 'gray'}
              />
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
  statusContainer: {
    height: 50,
    backgroundColor: '#f0f2f9',
  },
  bluetoothButton: {
    width: 50,
    height: '100%',
    position: 'absolute',
    left: 10,
    top: 0,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
