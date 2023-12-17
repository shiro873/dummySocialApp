import {Dimensions, Platform} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('screen');

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const CAMERA_SCREEN_WIDTH = Dimensions.get('window').width;
export const CAMERA_SCREEN_HEIGHT = Platform.select({
  android:
    Dimensions.get('screen').height - StaticSafeAreaInsets.safeAreaInsetsBottom,
  ios: Dimensions.get('window').height,
});
