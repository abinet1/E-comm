import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ThemeContext } from '../../providers';

interface PlusIconProps {
  size?: number;
  stroke?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ size = 24, stroke }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M12 6V12M12 12V18M12 12H18M12 12H6"
        stroke={ stroke || theme.text}
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;