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

interface Props {}

interface State {
  showProtection: boolean;
  showPlaid: boolean;
}
class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showProtection: false,
      showPlaid: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={AppBgImage}
          style={{ width: '100%', height: '100%' }}>
          <View style={styles.starContainer}>
            <View>
              <Image
                style={{ height: 70, width: '100%' }}
                source={StarTopBgImage}></Image>
              <TouchButton
                iconName="StarIcon"
                textLabel="Start Night Effects"
              />
            </View>
          </View>
          <View style={styles.lightContainer}>
            <View>
              <Image
                style={{ height: 70, width: '100%' }}
                source={LightTopBgImage}></Image>
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
