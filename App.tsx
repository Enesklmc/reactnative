/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as mapping} from './mapping.json';
import {Navigation} from './src/components/Navigation/Navigation';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';
const customStyle: any = mapping;

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light} customMapping={customStyle}>
      <Provider store={store}>
        <SafeAreaView style={[styles.appContainer]}>
          <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
          <Navigation />
        </SafeAreaView>
      </Provider>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {flex: 1},
});

export default App;
