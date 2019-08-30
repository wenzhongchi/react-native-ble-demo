import React, { Component } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  NativeEventEmitter,
  EmitterSubscription,
  NativeModules,
  GestureResponderEvent,
  ScrollView,
} from 'react-native';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import Menu, { MenuItem } from 'react-native-material-menu';
import { stringToBytes } from 'convert-string'; // for converting string to byte array
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
import NightEffect from './components/NightEffect';
import NightColor from './components/NightColor';
import LightEffect from './components/LightEffect';
import LightColor from './components/LightColor';
import CustomColor from './components/CustomColor';
import BleManager, { Peripheral } from 'react-native-ble-manager';
import ButtonIcon from '../components/Icon/ButtonIcon';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

interface State {
  showNightEffect: boolean;
  showNightColor: boolean;
  showLightEffect: boolean;
  showLightColor: boolean;
  showCustomColor: boolean;
  scanning: boolean;
  speedValue: number;
  dimValue: number;
}
class Home extends Component<{}, State> {
  optionOne: Menu = null;
  optionTwo: Menu = null;
  optionThree: Menu = null;
  handleDiscover: EmitterSubscription;
  connectedPeripheral: Peripheral | null;

  constructor() {
    super({});

    this.state = {
      showNightEffect: false,
      showNightColor: false,
      showLightEffect: false,
      showLightColor: false,
      showCustomColor: false,
      scanning: false,
      speedValue: 10,
      dimValue: 10,
    };

    this.connectedPeripheral = null;

    this.handleDiscover = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoverPeripheral,
    );
  }

  componentDidMount() {
    BleManager.enableBluetooth()
      .then(() => {
        console.log('Bluetooth is already enabled');
      })
      .catch(error => {
        Alert.alert('You need to enable bluetooth to use this app.');
      });

    BleManager.start({ showAlert: true }).then(() => {
      console.log('BLuetooth initialized');

      BleManager.scan([], 5, true).then(() => {
        // Success code
        console.log('Scan started');
      });
    });
  }

  // bluetooth

  handleDiscoverPeripheral = async (peripheral: Peripheral) => {
    try {
      if (peripheral.id === '74278BDA-B644-4520-8F0C-720EAF059935') {
        await BleManager.stopScan();
        console.log(peripheral);
        // connect
        await BleManager.connect(peripheral.id);

        BleManager.getConnectedPeripherals([]).then(results => {
          if (results.length == 0) {
            console.log('No connected peripherals');
            this.connectedPeripheral = null;
          }
          console.log('Connected peripherals');
          this.connectedPeripheral = peripheral;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleWrite = (command: string) => {
    if (!this.connectedPeripheral) return;

    const peripheralId = this.connectedPeripheral.id;

    BleManager.connect(peripheralId).then(() => {
      console.log('Connected and ready to send command');

      const service = '0xFFE0';
      const characteristic = '0xFFE1';

      const data = stringToBytes(command);
      const bytes = bytesCounter.count(command);

      BleManager.write(peripheralId, service, characteristic, data, bytes)
        .then(() => {
          console.log('Sent ' + command);
        })
        .catch(error => {
          // Failure code
          console.log(error);
        });
    });
  };

  // dropdown
  showOption = (option: Menu) => {
    option.show();
  };

  hideOption = (option: Menu) => {
    option.hide();
  };

  // render
  renderStarTitle = () => {
    const { showNightEffect, showNightColor } = this.state;

    if (showNightEffect) return 'Effects';
    if (showNightColor) return 'Colors';
    return 'Stars';
  };

  renderStar = () => {
    const { showNightEffect, showNightColor } = this.state;

    if (showNightEffect)
      return (
        <NightEffect
          onPressTwinkle={() => {
            this.setState({ showNightEffect: false });
            this.handleWrite('T');
          }}
          onPressFirefly={() => {
            this.setState({ showNightEffect: false });
            this.handleWrite('F');
          }}
          onPressRandom={() => {
            this.setState({ showNightEffect: false });
            this.handleWrite('R');
          }}
          onPressLightning={() => {
            this.setState({ showNightEffect: false });
            this.handleWrite('L');
          }}
        />
      );

    if (showNightColor)
      return (
        <NightColor
          containerStyle={{ marginTop: -22 }}
          onPress={(color: string) => {
            this.setState({ showNightColor: false });
            console.log(color);
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'S,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
            console.log(command);
            this.handleWrite(command);
          }}
          onClose={() => this.setState({ showNightColor: false })}
        />
      );

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: '10%' }}>
        <TouchButton
          containerStyle={{ marginVertical: 6 }}
          iconName="StarIcon"
          textLabel="Start Night Effects"
          onPress={() => this.setState({ showNightEffect: true })}
        />
        <TouchButton
          containerStyle={{ marginVertical: 6 }}
          iconName="ColorStarIcon"
          textLabel="Starry Night Colors"
          onPress={() => this.setState({ showNightColor: true })}
        />
        <TouchButton
          containerStyle={{
            marginTop: 6,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          iconName="ShootingStarIcon"
          textLabel="Shooting Star"
        />
        <View
          style={{
            height: 30,
            width: '100%',
            backgroundColor: Colors.borderColor,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRightColor: Colors.white,
              borderRightWidth: 1,
            }}>
            <Menu
              ref={(ref: Menu) => (this.optionOne = ref)}
              button={
                <Text
                  style={{ color: Colors.white }}
                  onPress={() => this.showOption(this.optionOne)}>
                  SS1
                </Text>
              }>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionOne);
                  this.handleWrite('p');
                }}>
                Off
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionOne);
                  this.handleWrite('a');
                }}>
                1 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionOne);
                  this.handleWrite('b');
                }}>
                2 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionOne);
                  this.handleWrite('c');
                }}>
                5 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionOne);
                  this.handleWrite('d');
                }}>
                10 min
              </MenuItem>
            </Menu>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRightColor: Colors.white,
              borderRightWidth: 1,
            }}>
            <Menu
              ref={(ref: Menu) => (this.optionTwo = ref)}
              button={
                <Text
                  style={{ color: Colors.white }}
                  onPress={() => {
                    this.showOption(this.optionTwo);
                  }}>
                  SS2
                </Text>
              }>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionTwo);
                  this.handleWrite('i');
                }}>
                Off
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionTwo);
                  this.handleWrite('e');
                }}>
                1 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionTwo);
                  this.handleWrite('f');
                }}>
                2 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionTwo);
                  this.handleWrite('g');
                }}>
                5 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionTwo);
                  this.handleWrite('h');
                }}>
                10 min
              </MenuItem>
            </Menu>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Menu
              ref={(ref: Menu) => (this.optionThree = ref)}
              button={
                <Text
                  style={{ color: Colors.white }}
                  onPress={() => {
                    this.showOption(this.optionThree);
                  }}>
                  SS3
                </Text>
              }>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionThree);
                  this.handleWrite('n');
                }}>
                Off
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionThree);
                  this.handleWrite('j');
                }}>
                1 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionThree);
                  this.handleWrite('k');
                }}>
                2 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionThree);
                  this.handleWrite('l');
                }}>
                5 min
              </MenuItem>
              <MenuItem
                onPress={() => {
                  this.hideOption(this.optionThree);
                  this.handleWrite('m');
                }}>
                10 min
              </MenuItem>
            </Menu>
          </View>
        </View>
        <View>
          <LightSwitch
            onChange={(switchState: boolean) => {
              console.log(switchState);
              if (switchState) {
                // off state
                this.handleWrite('O');
              } else {
                // on state
                this.handleWrite('T');
              }
            }}
          />
        </View>
      </ScrollView>
    );
  };

  renderAmbientTitle = () => {
    const { showLightEffect, showLightColor, showCustomColor } = this.state;

    if (showLightEffect) return 'Ambient Effects';
    if (showLightColor) return 'Ambient Colors';
    if (showCustomColor) return 'Ambient Custom';
    return 'Ambient Light';
  };

  renderAmbient = () => {
    const {
      showLightEffect,
      showLightColor,
      showCustomColor,
      speedValue,
      dimValue,
    } = this.state;

    if (showLightEffect)
      return (
        <LightEffect
          onPressFade={() => {
            this.setState({ showLightEffect: false });
            this.handleWrite('F,');
          }}
          onPressBlink={() => {
            this.setState({ showLightEffect: false });
            this.handleWrite('B,');
          }}
          onPressNoEffect={() => {
            this.setState({ showLightEffect: false });
            this.handleWrite('N');
          }}
        />
      );

    if (showLightColor)
      return (
        <LightColor
          containerStyle={{ marginTop: -22 }}
          onPress={(color: string) => {
            this.setState({ showLightColor: false });
            console.log(color);
            const rgbColor = hexRgb(color);
            console.log(rgbColor);
            const command =
              'C,' + rgbColor.red + ',' + rgbColor.green + ',' + rgbColor.blue;
            console.log(command);
            this.handleWrite(command);
          }}
          onClose={() => this.setState({ showLightColor: false })}
          onCustom={() =>
            this.setState({ showLightColor: false, showCustomColor: true })
          }
        />
      );

    if (showCustomColor)
      return (
        <CustomColor
          containerStyle={{ marginTop: -22 }}
          onChange={(color: string) => {
            console.log(color);
            this.setState({ showLightColor: false });
          }}
          onClose={() => this.setState({ showLightColor: false })}
        />
      );

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: '10%' }}>
        <TouchButton
          containerStyle={{ marginVertical: 10 }}
          iconName="StarIcon"
          textLabel="Start Night Effects"
          onPress={() => this.setState({ showLightEffect: true })}
        />
        <TouchButton
          containerStyle={{ marginVertical: 10 }}
          iconName="StarIcon"
          textLabel="Start Night Effects"
          onPress={() => this.setState({ showLightColor: true })}
        />
        <View>
          <LightSwitch
            onChange={(switchState: boolean) => {
              console.log(switchState);
              if (switchState) {
                // off state
                this.handleWrite('o');
              } else {
                // on state
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
      </ScrollView>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={AppBgImage}
          style={{ width: '100%', height: '100%' }}>
          <View style={styles.starContainer}>
            <View style={{ flex: 1 }}>
              <ImageBackground
                style={{ height: 80, width: '100%' }}
                source={StarTopBgImage}>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: Colors.white,
                  }}>
                  {this.renderStarTitle()}
                </Text>
              </ImageBackground>
              {this.renderStar()}
            </View>
          </View>
          <View style={styles.lightContainer}>
            <View style={{ flex: 1 }}>
              <ImageBackground
                style={{ height: 80, width: '100%' }}
                source={LightTopBgImage}>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: Colors.white,
                  }}>
                  {this.renderAmbientTitle()}
                </Text>
              </ImageBackground>
              {this.renderAmbient()}
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.bluetoothButton}>
              <ButtonIcon size={60} name="BluetoothIcon" />
            </View>
            <TouchableOpacity style={styles.statusButton}>
              <ButtonIcon name="RightArrowIcon" />
            </TouchableOpacity>
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
    // backgroundColor: '#e37d31',
  },
  starContainer: {
    height: '46%',
    flex: 1,
  },
  lightContainer: {
    height: '46%',
  },
  statusContainer: {
    height: '8%',
    backgroundColor: '#f0f2f9',
  },
  bluetoothButton: {
    width: 60,
    height: '100%',
    position: 'absolute',
    left: 10,
    top: 0,
  },
  statusButton: {
    backgroundColor: '#e37d31',
    width: 60,
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
