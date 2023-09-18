type TInsuranceKeys = import('../new-insurance-track-constant').INSURANCE_KEYS
type TNewInsuranceActionName = import('../new-insurance-track-constant').ACTION_NAME
type TFieldType= import('../new-insurance-track-constant').FIELD_TYPE


interface State {
    dataList: IStateElement[];
  }
  
  interface IStateElement {
    key: TInsuranceKeys;
    value: string | number;
    fieldType: TFieldType;
    defaultValue: string | number;
    actionName: TNewInsuranceActionName;
    label: string;
    valueType: 'string' | 'number';
    isRequired: boolean;
    regex: any;
    error: string;
  }
  
  interface Dispatcher {
    type: string;
    payload?: any;
  }