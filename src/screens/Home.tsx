import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  NativeModules,
  NativeEventEmitter,
  EmitterSubscription,
} from 'react-native';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import Menu, { MenuItem } from 'react-native-material-menu';
import { ReduxState, SettingState } from '../types/types';
import { StatusBarHeight } from '../utils/ScreenUtil';
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
const peripherals: string[] = [];

interface State {
  showNightEffect: boolean;
  showNightColor: boolean;
  showLightEffect: boolean;
  showLightColor: boolean;
  showCustomColor: boolean;
  scanning: boolean;
  peripherals: string[];
}
class Home extends Component<null, State> {
  optionOne: Menu = null;
  optionTwo: Menu = null;
  optionThree: Menu = null;
  handlerDiscover: EmitterSubscription | null = null;
  handlerStop: EmitterSubscription | null = null;
  handlerDisconnect: EmitterSubscription | null = null;

  state = {
    showNightEffect: false,
    showNightColor: false,
    showLightEffect: false,
    showLightColor: false,
    showCustomColor: false,
    scanning: false,
    peripherals: peripherals,
  };

  componentDidMount() {
    BleManager.start({ showAlert: true }).then(() => {
      console.log('BLuetooth initialized');
    });

    this.handlerDisconnect = bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      this.handleDisconnectedPeripheral,
    );

    this.retrieveConnected();
  }

  // bluetooth
  retrieveConnected = () => {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      console.log(results);
      const { peripherals } = this.state;
      for (let i = 0; i < results.length; i++) {
        const peripheral: Peripheral = results[i];
        peripherals.push(peripheral.id);
        this.setState({ peripherals });
      }
    });
  };

  handleDisconnectedPeripheral = (data: any) => {
    const { peripherals } = this.state;
    const peripheralId = data.peripheral.id;
    if (peripheralId) {
      const newPeripherals = peripherals.filter(
        value => value !== peripheralId,
      );
      this.setState({ peripherals: newPeripherals });
    }
    console.log('Disconnected from ' + data.peripheral);
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
          }}
          onPressFirefly={() => {
            this.setState({ showNightEffect: false });
          }}
          onPressRandom={() => {
            this.setState({ showNightEffect: false });
          }}
          onPressLightning={() => {
            this.setState({ showNightEffect: false });
          }}
        />
      );

    if (showNightColor)
      return (
        <NightColor
          containerStyle={{ marginTop: -22 }}
          onPress={(color: string) => {
            this.setState({ showNightColor: false });
          }}
          onClose={() => this.setState({ showNightColor: false })}
        />
      );

    return (
      <View style={{ marginHorizontal: '10%' }}>
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
              <MenuItem onPress={() => this.hideOption(this.optionOne)}>
                Off
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionOne)}>
                1 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionOne)}>
                2 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionOne)}>
                5 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionOne)}>
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
                  onPress={() => this.showOption(this.optionTwo)}>
                  SS2
                </Text>
              }>
              <MenuItem onPress={() => this.hideOption(this.optionTwo)}>
                Off
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionTwo)}>
                1 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionTwo)}>
                2 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionTwo)}>
                5 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionTwo)}>
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
                  onPress={() => this.showOption(this.optionThree)}>
                  SS3
                </Text>
              }>
              <MenuItem onPress={() => this.hideOption(this.optionThree)}>
                Off
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionThree)}>
                1 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionThree)}>
                2 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionThree)}>
                5 min
              </MenuItem>
              <MenuItem onPress={() => this.hideOption(this.optionThree)}>
                10 min
              </MenuItem>
            </Menu>
          </View>
        </View>
        <View>
          <LightSwitch />
        </View>
      </View>
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
    const { showLightEffect, showLightColor, showCustomColor } = this.state;

    if (showLightEffect)
      return (
        <LightEffect
          onPressFade={() => {
            this.setState({ showLightEffect: false });
          }}
          onPressBlink={() => {
            this.setState({ showLightEffect: false });
          }}
          onPressNoEffect={() => {
            this.setState({ showLightEffect: false });
          }}
        />
      );

    if (showLightColor)
      return (
        <LightColor
          containerStyle={{ marginTop: -22 }}
          onPress={(color: string) => {
            this.setState({ showLightColor: false });
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
            this.setState({ showLightColor: false });
          }}
          onClose={() => this.setState({ showLightColor: false })}
        />
      );

    return (
      <View style={{ marginHorizontal: '10%' }}>
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
          <LightSwitch />
        </View>
        <View>
          <LightSlider textLabel="Speed" sliderValue={0} />
          <LightSlider textLabel="Dim" sliderValue={0} />
        </View>
      </View>
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
                style={{ height: 70, width: '100%' }}
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
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
