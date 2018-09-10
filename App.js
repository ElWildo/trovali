import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import MainOptionsScreen from './screens/MainOptionsScreen.js';
import SearchScreen from  './screens/SearchScreen.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/icon.png')}/>
        <TouchableOpacity 
          onPress={() =>
            this.props.navigation.navigate('MainOptionsScreen')
          }
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

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    MainOptionsScreen: MainOptionsScreen,
    SearchScreen: SearchScreen,
    
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      header: null,
      headerStyle: {display:"none"},
      navBarHidden: true
    }
  }
);

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
