import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import _ from 'lodash';
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

interface Props {}

interface State {
  showNightEffect: boolean;
  showNightColor: boolean;
  showLightEffect: boolean;
  showLightColor: boolean;
  showCustomColor: boolean;
}
class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showNightEffect: false,
      showNightColor: false,
      showLightEffect: false,
      showLightColor: false,
      showCustomColor: false,
    };
  }

  componentDidMount() {}

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
          containerStyle={{ marginTop: -18 }}
          onPress={(color: string) => {
            this.setState({ showNightColor: false });
          }}
          onClose={() => this.setState({ showNightColor: false })}
        />
      );

    return (
      <View style={{ marginHorizontal: '10%' }}>
        <TouchButton
          containerStyle={{ marginVertical: 10 }}
          iconName="StarIcon"
          textLabel="Start Night Effects"
          onPress={() => this.setState({ showNightEffect: true })}
        />
        <TouchButton
          containerStyle={{ marginVertical: 10 }}
          iconName="ColorStarIcon"
          textLabel="Starry Night Colors"
          onPress={() => this.setState({ showNightEffect: true })}
        />
        <TouchButton
          containerStyle={{ marginVertical: 10 }}
          iconName="ShootingStarIcon"
          textLabel="Shooting Star"
        />
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
          containerStyle={{ marginTop: -18 }}
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
          containerStyle={{ marginTop: -18 }}
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
                style={{ height: 70, width: '100%' }}
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
            <View></View>
            <TouchableOpacity style={styles.statusButton} />
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
