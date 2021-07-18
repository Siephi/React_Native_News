import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import News from './src/News';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <News />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
