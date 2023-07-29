import React from 'react';
import {TextInput, View} from 'react-native';

import {inputStyle} from './ui-input-view-style';

/**
 *
 * @param {string} params.placeholder to give the placeholder to the input box
 * @param {KeyboardTypes} params.keyboardType to specify the type of keyboard like numeric, number-pad etc.
 * @param {string} params.inputValue to the value to input box
 * @param {NumberPadClick} params.onNumberPadClick this method used to update the text of input text
 * @returns returns the ui of input text box
 */
const UIInputView: React.FC<IUIInputProps> = ({
  placeholder,
  keyboardType,
  inputValue,
  multiline = false,
  numberOfLines = 0,
  editable,
  onChangeText,
  placeholderTextColor,
  style,
  componentStyle,
}) => {
  return (
    <View style={[inputStyle?.component, componentStyle]}>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={e => onChangeText(e)}
        value={inputValue}
        testID="input"
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        style={style}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default UIInputView;
