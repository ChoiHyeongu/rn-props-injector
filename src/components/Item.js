
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { space } from '../styles/base';

const Item = ({ children, elevate }) => {
  console.log('elevate', elevate);
  return (
    <View style={[
      styles.container,
      { marginHorizontal: elevate ? space.margin.elevate : space.margin.common }
    ]}
    >
      <Text>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'red',
  },
});

export default React.memo(Item);
