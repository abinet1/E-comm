import React, { useCallback, useContext, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../providers';
import { BackIcon, FilterIcon, MoonIcon, SunIcon } from '../../../assets';
import { Text } from '../atoms';
import { color } from '../../../themeConfig';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    theme.base === color.light.base? setTheme(color.dark): setTheme(color.light)
  };

  return (
    <View style={[styles.flexRow, styles.container]}>
      <View>
        <BackIcon />
      </View> 
      <View style={[styles.flexRow, {gap: 20}]}>
        <View style={[styles.flexRow]}>
          <FilterIcon />
          <Text variant='text'>{` Filter`}</Text>
        </View>
        <TouchableOpacity onPress={changeTheme}>
          {theme.base === color.light.base?
            <MoonIcon />:
            <SunIcon />
          }
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 15,
  },
});
export default Header;
