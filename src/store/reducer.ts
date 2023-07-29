import {combineReducers} from '@reduxjs/toolkit';
import authentication from '@store/splices/auth-entity';
import { SLICE_NAME } from './constant';
import employeeEntity from './splices/employee-entity';
import userListEntity from './splices/task-list-entity';

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  [SLICE_NAME.AUTH]: authentication,
  [SLICE_NAME.EMPLOYEE]: employeeEntity,
  [SLICE_NAME.TASK_LIST]: userListEntity
});
