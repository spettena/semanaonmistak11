import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// SS and  JS tradicional
//<div> <h1> <header> <p>

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Olá Gabrielelllliiiieee!!!!!!!!!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7059c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
    
  },

});
