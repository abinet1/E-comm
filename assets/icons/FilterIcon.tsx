import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ThemeContext } from '../../providers';

interface FilterIconProps {
  size?: number;
}

const FilterIcon: React.FC<FilterIconProps> = ({ size = 20 }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M3 5H17" stroke={theme.text} stroke-width="2" stroke-linecap="round"/>
      <Path d="M5 10H15" stroke={theme.text} stroke-width="2" stroke-linecap="round"/>
      <Path d="M7 15H13" stroke={theme.text} stroke-width="2" stroke-linecap="round"/>
    </Svg>
  );
};

export default FilterIcon;