import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';

class MainOptionsScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <TouchableOpacity 
              onPress={() =>
                this.props.navigation.navigate('SearchScreen')
              }
              style={styles.button}
            >
              <Text
                style={styles.buttonText}
              >Trova il proprietario</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              //onPress={() =>
              //  this.props.navigation.navigate('MainOptionsScreen')
              //}
              style={styles.button}
            >
              <Text
                style={styles.buttonText}
              >Esegui l'accesso</Text>
            </TouchableOpacity>
          </View>
        );
      }
}

export default MainOptionsScreen;

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
      borderRadius: 5,
      margin: 5,
    },
    buttonText :{
      color: '#fff',
      fontSize: 18,
    }
  });