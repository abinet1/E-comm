import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { ProductListScreen } from './src/components/pages';
import { useColorScheme } from 'react-native';
import ThemeProvider from './providers';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ProductListScreen />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
