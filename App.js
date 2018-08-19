import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/icon.png')}/>
        <TouchableOpacity 
          //onPress=
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >TrovAli</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dd9933',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#215c84',
    padding: 10,
    borderRadius: 5
  },
  buttonText :{
    color: '#fff',
    fontSize: 18,
  }
});
