import React, { useContext } from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { ThemeContext } from '../../../providers';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  styleProps?: ViewStyle;
}

const Input: React.FC<InputProps> = ({ value, onChangeText, styleProps={}, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TextInput
      value={value}
      placeholderTextColor={theme.text}
      selectionColor={theme.text}
      cursorColor={theme.text}
      // underlineColorAndroid={theme.text}
      selectionHandleColor={theme.text}
      onChangeText={onChangeText}
      style={[styles.input, styleProps, {color: theme.text}]}
      {...props}
    />
  )
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default Input;
