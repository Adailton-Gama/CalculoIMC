import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/'
import Main from './src/components/Main'
import Form from './src/components/form'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#e6dfe1",
    paddingTop:80,
  },
});
