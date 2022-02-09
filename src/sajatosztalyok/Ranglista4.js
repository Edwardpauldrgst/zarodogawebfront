import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    dataSource:[]
  }
  }

  szavazat=(szam)=>{
    var bemenet={
      bevitel1:szam
    }

  fetch("http://localhost:8080/Ranglista4", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text());


  }


  componentDidMount(){
    return fetch('http://localhost:8080/Ranglista4')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        
      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{border:"1px solid black",textAlign:"center,",marginLeft:150,marginRight:150,paddingLeft:20,marginBottom:10}}>
          <Text style={{color:"black",fontSize:20,textAlign:"left",marginleft:20,marginTop:5,marginBottom:5}}   >{"Név: "}{item.nev} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"left",marginleft:20,marginTop:5,marginBottom:5}}   >{"Idő: "}{item.ido}{" másodperc"} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"left",marginleft:20,marginTop:5,marginBottom:5}}   >{"Pályaméret: "}{item.meret} </Text>
          
          </View>
        
        }

        
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});