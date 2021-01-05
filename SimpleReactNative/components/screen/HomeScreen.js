import React from 'react'
import { View,Text,StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({navigation})=> {
    return (
        <View style={styles.continer}> 
            <View style={styles.Header}>
                <Image 
                 source={require('../screen/Image/Logo.png')}
                 style={styles.Logo}
                 resizeMethod='stretch'
                />
            </View>
            <View style={styles.Footer}>
                <Text style={styles.tital}>Stay cwith everyone!</Text>
                <Text style={styles.titaltext}>Sign in with account</Text>
              
              <View>
                <TouchableOpacity  onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.button}>Get Started</Text>
                </TouchableOpacity>
                    
             </View> 
            </View>
        </View>
       
    )
}
const styles=StyleSheet.create({
continer:{
    flex:1,
backgroundColor:"#009387",
},
Header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
},
Footer:{
 flex:1,
 backgroundColor:'#fff',
 borderTopLeftRadius:30,
 borderTopRightRadius:30,
 paddingHorizontal:50,
},
tital:{
color:'#05375a',
fontSize:30,
fontWeight:'bold'
},
titaltext:{
    color:'grey',
    marginTop:5,
},
button:{
    marginTop:30,
    fontWeight:'bold'
}

});

export default HomeScreen;