import React from 'react';
import UITextInputView from './ui-text-input-view';

/**
 * Widget to render customizable text
 * @param {IUITextInputViewProps} props
 * @returns
 */
const UITextInput: React.FunctionComponent<IUITextInputViewProps> = props => {
  return <UITextInputView {...props} />;
};

export default UITextInput;
