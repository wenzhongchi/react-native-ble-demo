import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';

export const StatusBarHeight = getStatusBarHeight();

export const ScreenHeight = Dimensions.get('window').height;
export const ScreenWidth = Dimensions.get('window').width;
