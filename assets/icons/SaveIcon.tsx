import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SaveIconProps {
  size?: number;
}

const SaveIcon: React.FC<SaveIconProps> = ({ size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 32" fill="none">
      <Path 
        d="M2.69336 31.7695C3.55469 31.7695 4.14258 31.3867 5.22266 30.3203L10.377 25.166C10.4453 25.1113 10.541 25.1113 10.6094 25.166L15.7773 30.334C16.8574 31.3867 17.418 31.7695 18.293 31.7695C19.6738 31.7695 20.5898 30.7988 20.5898 29.2949V5.24609C20.5898 2.33398 18.9766 0.720703 16.0918 0.720703H4.89453C2.00977 0.720703 0.396484 2.33398 0.396484 5.24609V29.2949C0.396484 30.7988 1.29883 31.7695 2.69336 31.7695Z" 
        fill="#4E5876"
      />
    </Svg>
  );
};

export default SaveIcon;