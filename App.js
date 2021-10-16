import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ElevateContainer from './src/components/ElevateContainer';
import Item from './src/components/Item';


const App: () => React.Node = () => {

  const [count, setCount] = useState(0);

  const rerender = () => {
    setCount(count + 1);
  }

  console.log('COUNT', count);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={rerender} />
      <Space />
      <ElevateContainer>
        <Item>
          {count}
        </Item>
      </ElevateContainer>
      <Space />
      <Item />
    </SafeAreaView>
  );
};

const Space = () => {
  return <View style={styles.space} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  space: {
    marginVertical: 20,
  },
  button: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'green',
  }
});

export default App;
