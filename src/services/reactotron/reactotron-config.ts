import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, {openInEditor} from 'reactotron-react-native';

export const modifiedConsole = __DEV__
  ? {consoleLog: globalThis.console.log}
  : {consoleLog: () => null};

if (__DEV__) {
  Reactotron.configure({
    name: 'exampur',
    host: '192.168.1.10', // to add Ip address for wireless connection
  }) // Controls connection and communication settings
    .setAsyncStorageHandler?.(AsyncStorage)
    .useReactNative() // and all built in react-native plugins
    .connect() // let's connect
    .use(openInEditor()); // open error in code upon clicking on console.error page

  console.log = () => null;
}
