import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ThemeContext } from '../../providers';

interface BackIconProps {
  size?: number;
}

const BackIcon: React.FC<BackIconProps> = ({ size = 24 }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg width={size} height={size} viewBox="0 0 10 16" fill="none">
      <Path 
        d="M8 2L2.07071 7.92929C2.03166 7.96834 2.03166 8.03166 2.07071 8.07071L8 14" 
        stroke={theme.text}
        stroke-width="3" 
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackIcon;