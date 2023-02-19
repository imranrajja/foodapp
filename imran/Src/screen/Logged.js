import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imgPath from '../assest/Index'
const Logged = ({navigation}) => {
  return (
    <View>
<View>
      <Image style={styles.photo} source={imgPath.photo}/>
      <Image style={styles.logo} source={imgPath.logo} />
      </View>

      <View style={styles.btnview}>
<TouchableOpacity style={styles.touch}>
    <Text  style={styles.txt1}>LOG IN</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.touch2} onPress={()=> navigation.navigate("Register")}>
    <Text style={styles.txt2}>REGISTER</Text>
</TouchableOpacity>

      </View>

    </View>
  )
}

export default Logged

const styles = StyleSheet.create({
    photo:{
        width:"100%",
        height:"95%"
    },
    logo:{
        position:'absolute',
        top:"40%",
        alignSelf:"center",
        // justifyContent:"center"
    },
    btnview:{
        flexDirection:"row",
        justifyContent:"space-around",
        // borderWidth:1,borderColor:"black",
          
    },
    touch:{
        borderWidth:1,borderColor:"black",
        width:"40%",
        height:"180%",
        alignItems:"center",
        borderRadius:10
        
        
    },
    touch2:{
        borderWidth:1,borderColor:"black",
        width:"40%",
        height:"180%",
        alignItems:"center",
        backgroundColor:"black",
        borderRadius:10
    },
    txt1:{
        color:"black",
        fontWeight:"bold",
        fontSize:15,
        top:10
    },
    txt2:{
        fontSize:15,
        fontWeight:"bold",
        color:"white",
        top:10
    }
})