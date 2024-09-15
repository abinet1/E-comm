import React, { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ThemeContext } from '../../providers';

interface MoonIconProps {
  size?: number;
}

const MoonIcon: React.FC<MoonIconProps> = ({ size = 24 }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M17.293 13.293C15.8115 13.9631 14.161 14.1658 12.5614 13.8742C10.9617 13.5826 9.48895 12.8105 8.33919 11.6608C7.18944 10.511 6.41734 9.03824 6.12574 7.4386C5.83415 5.83897 6.03691 4.18846 6.70701 2.70697C5.52758 3.23998 4.49505 4.05117 3.69802 5.07093C2.90099 6.09069 2.36324 7.28859 2.13092 8.56186C1.8986 9.83512 1.97864 11.1457 2.36417 12.3813C2.7497 13.6168 3.42922 14.7404 4.34442 15.6556C5.25961 16.5708 6.38318 17.2503 7.61871 17.6358C8.85424 18.0213 10.1649 18.1014 11.4381 17.8691C12.7114 17.6367 13.9093 17.099 14.9291 16.302C15.9488 15.5049 16.76 14.4724 17.293 13.293Z" 
        fill={theme.text}
      />
    </Svg>
  );
};

export default MoonIcon;