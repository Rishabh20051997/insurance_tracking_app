type CACHING_TIME = import('../store/enum').CACHING_TIME;
type ImageSourcePropType = import('react-native').ImageSourcePropType;

interface LooseObject {
  [key: string]: any;
}

interface LooseStringObject {
  [key: string]: string;
}

interface IDispatchType {
  url: string;
  method: HttpMethod;
  data?: LooseObject;
  reducerData?: LooseObject;
  requestParam?: LooseObject
  onStart: string;
  onSuccess: string;
  onError: string;
  auth: boolean;
  cacheValidityDuration: CACHING_TIME; // 10 minutes will be recommended
}
