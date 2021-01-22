import React from 'react';
import NavigationStack from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import './src/Translation/index';
// import i18next from 'i18next';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    </>
  );
};

export default App;
