import {Dimensions} from 'react-native';

type ScreenDimensions = 'screenWidth' | 'screenHeight';

type IMetrics = {
  [key in ScreenDimensions]: number;
};

const {width, height} = Dimensions.get('window');

const METRICS: IMetrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default METRICS;
