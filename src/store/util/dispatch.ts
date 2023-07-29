import {apiCallBegan} from '@store/middlewares/api-middleware-actions';
import {store} from '@store/configureStore';

const apiDispatch = (payload: IDispatchType) => {
  return store.dispatch({type: apiCallBegan.type, payload: payload});
};
export default apiDispatch;
