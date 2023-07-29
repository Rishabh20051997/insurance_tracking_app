import {
  createRequest,
  HttpClient,
  HttpMethod,
} from '@secure-access-control/client';
import {axiosInterceptor} from '@services/axios/axios-service';
import {
  apiCallBegan,
  apiCallFailed,
  apiCallSuccess,
} from '@store/middlewares/api-middleware-actions';
import {CACHING_TIME} from '@store/enum';
import {AnyAction, Middleware} from 'redux';
import {SERVER_BASE_URL} from '@store/app-configuration';
import {log} from '@services/reactotron/reactotron-log';
// for handling caching , last called time is pushed and compared with current time
const apiLastCalledTimeMap = new Map<
  string,
  {url: string; method: string; lastCalled: number}
>();
/**
 * it will check the time difference between last time when api called and the present time
 * @param key to get the last called time from apiLastCalledTimeMap Map
 * @param timeOut caching time out
 * @returns boolean
 */
const isAPICached = (key: string, timeOut: CACHING_TIME) => {
  let previousTime = apiLastCalledTimeMap.get(key)?.lastCalled;
  //if timer is greater than zero and current time minus previous time is less than  given timeOut
  if (
    previousTime &&
    timeOut > CACHING_TIME.INVALIDATE &&
    new Date().getMinutes() - previousTime < timeOut
  )
    return true;
  return false;
};
/**
 * it will create a request object for axios with header felids
 * @param url url for the api call
 * @param method method for the api call
 * @param authToken auth token
 * @param data data for post request
 */
const createRequestObject = (
  url: string,
  method: HttpMethod,
  authToken: string,
  data?: any,
) =>
  createRequest(
    SERVER_BASE_URL,
    url,
    method,
    HttpClient.MOBILE,
    authToken ? authToken : undefined,
    data,
  );
//  this will make and API request and dispatch different scenarios for api success ,failure and start
/**
 * This will make an api call using axios ,
 *    Before beginning the api call it will dispatch on start action
 *    After a successful api call it will dispatch onSuccess and on error it will dispatch onError action
 */
const makeApiRequest = async (
  dispatch: AppDispatch,
  getState: RootState,
  payload: IDispatchType,
) => {
  const {
    url,
    method,
    data,
    onError,
    onStart,
    onSuccess,
    cacheValidityDuration,
    requestParam,
  } = payload;
  // if api caching timed out , otherwise it wont proceed further
  if (isAPICached(url + method, cacheValidityDuration)) {
    return;
  }

  const authToken = getState()?.auth?.data?.token?.authToken || undefined;

  try {
    // called before api call starts
    if (onStart) {
      // if requestParam object passed -> return back in response payload, else return simple data
      dispatch({
        type: onStart,
        payload: {requestParam: requestParam || {}},
      });
    }

    let request = createRequestObject(url, method, authToken, data);
    let response = await axiosInterceptor.request(request);

    dispatch({type: apiCallSuccess.type, payload: response.data});
    apiLastCalledTimeMap.set(url + method, {
      url: url,
      method: method,
      lastCalled: new Date().getTime(),
    });

    // called after api call resolves
    if (onSuccess) {
      // if requestParam object passed -> return back in response payload, else return simple data
      requestParam
        ? dispatch({
            type: onSuccess,
            payload: {data: response.data, requestParam: requestParam},
          })
        : dispatch({type: onSuccess, payload: response.data});
    }

    return response;
  } catch (error: any) {
    let response = {data: {message: '', statusCode: 0}}; // temporary

    if (error?.response?.data) {
      response = error?.response;
    } else {
      if (error?.message) {
        response = {data: {message: error?.message, statusCode: 400}};
      }
    }

    dispatch({type: apiCallFailed.type, payload: response});

    // called after api call rejects or has error
    if (error) {
      // if requestParam object passed -> return back in response payload, else return simple data
      requestParam
        ? dispatch({
            type: onError,
            payload: {error: response, requestParam: requestParam},
          })
        : dispatch({type: onError, payload: response});
    }
    return response;
  }
};

const apiMiddleware: Middleware<
  {dispatch: Dispatch; getState: RootState}, // Most middleware do not modify the dispatch return value
  RootState
> =
  ({dispatch, getState}: {dispatch: Dispatch; getState: RootState}) =>
  (next: any) =>
  (action: AnyAction) => {
    return action?.type === apiCallBegan.type
      ? makeApiRequest(dispatch, getState, action?.payload)
      : next(action);
  };
export default apiMiddleware;
/**
 * used to reset api called map
 */
export const resetApiLastCalledMapCache = () => {
  apiLastCalledTimeMap.clear();
};
