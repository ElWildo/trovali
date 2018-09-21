import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';

export default class SearchScreen extends React.Component {

    constructor(props){

      super(props);
      this.state ={
        birdring: null,
        birdToRender : [],
        key: 0,
        statusSearch: '',
      }

    }

    submitBirdsring(birdring) {
      this.setState({statusSearch: 'Ricerca in corso...'});
      this.setState({birdToRender: []});
      this.setState({key: 0});

      fetch('http://trovali.org/wp-json/funcbirds/v1/findbirds/?birdring='+birdring, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        },
      })
      .then((response)=>{return response.text();})
      .then((responseJson) => {
        this.setState({statusSearch: 'Elaborando i risultati...'});
        
        data = JSON.parse(responseJson);
        
        if(data.length < 1 || data == undefined){
          this.setState({statusSearch: 'Nessun Animale registrato a questo codice'});
        } else {
          for(let i=0; i<data.length; i++){ 
            let birdarray = this.state.birdToRender;
            let key = this.state.key
            let birdToAdd = (
              <View style = {styles.table} key= {key}>

                <View style = {styles.row}>
                  <View style = {styles.leftCellA}>
                    <Text style= {styles.text}> Nome Animale:</Text>
                  </View>
                  <View style = {styles.rightCellA}>
                    <Text style= {styles.text}> {data[i].nom}</Text>
                  </View>
                </View>

                <View style = {styles.row}>
                  <View style = {styles.leftCellA}>
                    <Text style= {styles.text}> Specie Animale:</Text>
                  </View>
                  <View style = {styles.rightCellA}>
                    <Text style= {styles.text}> {data[i].raz}</Text>
                  </View>
                </View>
    
                <View style = {styles.row}>
                  <View style = {styles.leftCellB}>
                    <Text style= {styles.text}> Telefono Proprietario:</Text>
                  </View>
                  <View style = {styles.rightCellB}>
                    <Text style= {styles.text}> {data[i].tel}</Text>
                  </View>
                </View>
    
              </View>
            );
            birdarray.push(birdToAdd);
            key++;
            this.setState({key:key});
            this.setState({statusSearch: ''});
            this.setState({birdToRender: birdarray});
          }
        }
      });
  }

  test(){

    let birdarray = this.state.birdToRender;
    let key = this.state.key
    let birdToAdd = (
      <View style = {styles.table} key= {key}>

        <View style = {styles.row}>
          <View style = {styles.leftCellA}>
            <Text style= {styles.texTab}> Nome Animale:</Text>
          </View>
          <View style = {styles.rightCellA}>
            <Text style= {styles.texTab}> Prova</Text>
          </View>
        </View>

        <View style = {styles.row}>
          <View style = {styles.leftCellA}>
            <Text style= {styles.texTab}> Specie Animale:</Text>
          </View>
          <View style = {styles.rightCellA}>
            <Text style= {styles.texTab}> Prova</Text>
          </View>
        </View>

        <View style = {styles.row}>
          <View style = {styles.leftCellB}>
            <Text style= {styles.texTab}> Telefono Proprietario:</Text>
          </View>
          <View style = {styles.rightCellB}>
            <Text style= {styles.texTab}> ProvaProvaProvaProvaProvaProvaProvaProvaProvaProvaProvaProvaProvaProva</Text>
          </View>
        </View>

      </View>
    );
    birdarray.push(birdToAdd);
    key++;
    this.setState({key:key});
    this.setState({statusSearch: ''});
    this.setState({birdToRender: birdarray});

  }


    render() {
        return (
          <View style={styles.container}>
              {this.state.birdToRender}
              <Text
                style={styles.text}
              >{this.state.statusSearch}</Text>
              <TextInput
                style={styles.textinput}
                placeholder = 'Codice Univoco Anello'
                underlineColorAndroid = "transparent"
                value = {this.state.birdring}
                onChangeText={(text) => this.setState({birdring: text})}
              />
            <TouchableOpacity 
              style={styles.button}
              activeOpacity={.5}
              onPress = { () => {
                Keyboard.dismiss();
                this.submitBirdsring( this.state.birdring);
                //this.test();
              }}
              >
              <Text
                style={styles.buttonText}
              >Cerca Proprietario</Text>
            </TouchableOpacity>
          </View>
        );
      }
}



const styles = StyleSheet.create({
    table:{
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      margin: 5,
    },
    row:{
      alignItems: 'center',
      flexDirection: 'row',
    },
    leftCellA:{
      flex:1,
      alignItems: 'flex-start',
      backgroundColor: '#ffff99',
      padding: 5,
      flexDirection: 'column',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    rightCellA:{
      flex:1,
      alignItems: 'flex-end',
      backgroundColor: '#ffcc99',
      padding: 5,
      flexDirection: 'column',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    leftCellB:{
      flex:1,
      alignItems: 'flex-start',
      backgroundColor: '#ffff66',
      padding: 5,
      flexDirection: 'column',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    rightCellB:{
      flex:1,
      alignItems: 'flex-end',
      backgroundColor: '#ff9933',
      padding: 5,
      flexDirection: 'column',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
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
      margin: 5
    },
    buttonText :{
      color: '#fff',
      fontSize: 18,
    },
    text :{
      color: '#fff',
      fontSize: 18,
    },
    texTab :{
      color: '#808080',
      fontSize: 16,
    },
    textinput:{
      borderRadius: 5,
      backgroundColor: '#ffff99',
      margin: 15,
      alignSelf: 'stretch',
      height: 40,
      padding: 10
    }
  });