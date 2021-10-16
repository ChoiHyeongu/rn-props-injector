import React from 'react';
import { View, StyleSheet } from 'react-native';
import { space } from '../styles/base';
import PropsInjector from './PropsInjector';

/**
 * 
 */
const ElevateContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <PropsInjector elevate>{children}</PropsInjector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    marginHorizontal: space.margin.common,
  },
});

export default React.memo(ElevateContainer);
