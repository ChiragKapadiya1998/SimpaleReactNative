import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function Login() {
    return (
        <View style={styles.continer}> 
            <View style={styles.Header}>
            <Text style={styles.Headertext}>WelCome Our WebSite</Text>
            </View>
            <View style={styles.Footer}>
            <Text style={{fontSize:20 ,marginTop:40}}>Email Id</Text>
            <TextInput 
            placeholder='Enter the EmailId'
            style={styles.textInput}
            />           
            <Text style={{fontSize:20 ,marginTop:30}}>PassWord</Text>
            <TextInput 
            placeholder='Enter the PassWord'
            style={styles.textInput}
            />  
            <View>
                <TouchableOpacity>
                    <Button title='Sign In' style={styles.button}/>
                    <Button title='Sign Up' style={styles.button}/>
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
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Headertext:{
        fontSize:20,
        fontWeight:'bold'
    },
    Footer:{
     flex:2,
     backgroundColor:'#fff',
     borderTopLeftRadius:30,
     borderTopRightRadius:30,
     paddingHorizontal:50,
    },
    textInput:{
        marginTop:5,
        padding: 10,
        borderRadius: 2,
        borderWidth:1,
        borderColor:'grey'
   
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
        fontWeight:'bold',
        borderWidth:1
        
    }
    
    });
    
