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
import MenuButton from '../components/button/MenuButton';

interface Props {}

interface State {
  showEffect: boolean;
  showColor: boolean;
  showLightEffect: boolean;
  showLightColor: boolean;
}
class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showEffect: false,
      showColor: false,
      showLightEffect: false,
      showLightColor: false,
    };
  }

  componentDidMount() {}

  render() {
    const { showEffect, showColor } = this.state;

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
                  Stars
                </Text>
              </ImageBackground>
              {showEffect ? (
                <View
                  style={{
                    flex: 1,
                  }}>
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <MenuButton
                      iconName="TwinkleIcon"
                      textLabel="Twinkle"
                      rightBorder
                      bottomBorder
                    />
                    <MenuButton
                      iconName="FireflyIcon"
                      textLabel="Firefly"
                      bottomBorder
                    />
                  </View>
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <MenuButton
                      iconName="RandomIcon"
                      textLabel="Random"
                      rightBorder
                    />
                    <MenuButton
                      iconName="LightningIcon"
                      textLabel="Lightning"
                    />
                  </View>
                </View>
              ) : (
                <View style={{ marginHorizontal: '10%' }}>
                  <TouchButton
                    containerStyle={{ marginVertical: 10 }}
                    iconName="StarIcon"
                    textLabel="Start Night Effects"
                    onPress={() => this.setState({ showEffect: true })}
                  />
                  <TouchButton
                    containerStyle={{ marginVertical: 10 }}
                    iconName="ColorStarIcon"
                    textLabel="Starry Night Colors"
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
              )}
            </View>
          </View>
          <View style={styles.lightContainer}>
            <View>
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
                  Ambient Light
                </Text>
              </ImageBackground>
              <View style={{ marginHorizontal: '10%' }}>
                <TouchButton
                  containerStyle={{ marginVertical: 10 }}
                  iconName="StarIcon"
                  textLabel="Start Night Effects"
                />
                <TouchButton
                  containerStyle={{ marginVertical: 10 }}
                  iconName="StarIcon"
                  textLabel="Start Night Effects"
                />
                <View>
                  <LightSwitch />
                </View>
                <View>
                  <LightSlider textLabel="Speed" sliderValue={0} />
                  <LightSlider textLabel="Dim" sliderValue={0} />
                </View>
              </View>
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
