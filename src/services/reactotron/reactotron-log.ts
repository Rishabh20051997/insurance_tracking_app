import Reactotron from 'reactotron-react-native';
import {modifiedConsole} from './reactotron-config';

export function log(...logData: any) {
  if (__DEV__) Reactotron.log?.(logData);
  modifiedConsole.consoleLog(logData);
}
