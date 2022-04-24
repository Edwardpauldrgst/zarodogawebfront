import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    dataSource:[]
  }
  }

  torol=(szam)=>{
    var bemenet={
      bevitel1:szam
    }

  fetch("http://localhost:3000/adattorles", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));


  }


  componentDidMount(){
    return fetch('http://localhost:3000/mindenadat')
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
      <View style={{backgroundColor:"#1a1c2c",flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{backgroundColor:"#333c57",border:"4px solid #566c86",textAlign:"center,",marginLeft:150,marginRight:150,paddingLeft:20,marginBottom:10}}>
          <Text style={{color:"white",fontSize:20,textAlign:"left",marginleft:20,marginTop:5,marginBottom:5}}   >{"Név: "}{item.nev} </Text>
          <Text style={{color:"white",fontSize:20,textAlign:"left",marginleft:20,marginTop:5,marginBottom:5}}   >{"Idő: "}{item.ido}{" másodperc"} </Text>
          <Text style={{color:"white",fontSize:20,textAlign:"left",marginleft:20,marginTop:5,marginBottom:5}}   >{"Pályaméret: "}{item.meret} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.torol(item.id)}
          >
            <Text style={{color:"white",backgroundColor:"#4f213f",border:"4px solid #b13e53",marginleft:20,marginTop:5,marginBottom:5,width:60,textAlign:'center'}}>Törlés</Text>
          </TouchableOpacity>
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