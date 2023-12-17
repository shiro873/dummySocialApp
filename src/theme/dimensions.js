import {Dimensions, Platform} from 'react-native';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('screen');

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
