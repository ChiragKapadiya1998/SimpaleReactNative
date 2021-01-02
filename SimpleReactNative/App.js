import React, { Component } from "react";
import {StyleSheet,ScrollView, Button, Text, View ,SafeAreaView,Image, Alert,TouchableOpacity,} from "react-native";

class App extends Component {
  state = { myState: "chirag kapadiya",};
   updateState = () => this.setState({myState: 'The state is updated'  })
 
  render(props) {
    return (
      <ScrollView>  
      <View><Text>chirag kapadiya</Text></View>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
  contioner: {
    marginTop:20,
    flex:1,    
  },
  text: {
    height:30,
    borderRadius: 2,
    color:'#fff',
    fontSize: 20,
    backgroundColor: 'red'
  }

})

export default  App;