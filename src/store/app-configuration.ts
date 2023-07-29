import DeviceInfo from 'react-native-device-info';
import {BASE_URL} from './enum';

// NOTE - Adjust this boolean value as per requirement of build
const IS_PRODUCTION_BUILD = __DEV__ ? false : true;
const SERVER_BASE_URL = IS_PRODUCTION_BUILD ? BASE_URL.PRODUCTION : BASE_URL.DEV


const APP_VERSION_INFO = {
  VERSION_NAME: DeviceInfo.getVersion(),
  VERSION_CODE: DeviceInfo.getBuildNumber(),
};

export {
  SERVER_BASE_URL,
  APP_VERSION_INFO
};
