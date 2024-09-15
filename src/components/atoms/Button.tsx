import React, { ReactNode, useContext } from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps, ViewStyle } from 'react-native';
import { ThemeContext } from '../../../providers';
import Text from './Text';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: 'primary'|'danger';
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  size?: 'sm'|'md';
  styleProps?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, rightIcon,size='sm', leftIcon, variant='primary', styleProps={}, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.button, 
        {
          backgroundColor: theme?.[variant],
          height: size=='md'?50:35,
          ...styleProps
        }
      ]} 
      {...props}
    >
      {leftIcon && leftIcon}
      <Text 
        variant={size=='md'?
          'h4':
          'h6'
        }
        style={{color: '#fff'}}
      >{title}</Text>
      {rightIcon && rightIcon}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
