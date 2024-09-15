import React, { useContext } from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../providers';

interface TextPropsExtended extends TextProps {
  children: React.ReactNode;
  variant: 'title'|'text'|'h4'|'h5'|'h6';
  style?: object;
}

// h1 = 24 pixels,
// h2 = 22 pixels,
// h3 = 20 pixels,
// h4 = 18 pixels,
// h5 = 16 pixels,
// h6 = 16 pixels.
const Text: React.FC<TextPropsExtended> = ({ children, variant, style, ...props }) => { 
  const { theme } = useContext(ThemeContext);
  return(
    <RNText style={[Style?.[variant], {color: theme.text}, style]} {...props}>
      {children}
    </RNText>
  )
};

const Style = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  h4:{
    fontSize: 18,
    fontWeight: '500',
  },
  h5: {
    fontSize: 16,
    fontWeight: '500',
  },
  h6: {
    fontSize: 14,
    fontWeight: '500',
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default Text;
