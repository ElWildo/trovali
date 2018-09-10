import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';

export default class SearchScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.containerStretch}>
              <TextInput
                style={styles.textinput}
                placeholder = 'Codice Univoco Anello'
                underlineColorAndroid = "transparent"
              />
            </View>
            <TouchableOpacity 
              style={styles.button}
              >
              <Text
                style={styles.buttonText}
              >pulsante di prova</Text>
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
    containerStretch:{
      alignItems: 'stretch',
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#215c84',
      padding: 10,
      borderRadius: 5,
      margin: 5
    },
    buttonText :{
      color: '#fff',
      fontSize: 18,
    },
    textinput:{
      borderRadius: 5,
      backgroundColor: '#ffff99',
      margin: 15,
    }
  });