import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState({

    Email:"",
    Password:"",
  })

  const validation =()=>{
    seterror({
      Email: email? "" : "inviled email",
      Password: password? "" : "inviled password"
    })
  }


  return (
    <View>

      <View style={styles.loginview}>
      <Text style={styles.logintxt}>Log in</Text>
      </View>

      <View >

        <View style={ styles.txtview} >
          <TextInput placeholder='Enter the email' onChangeText={setemail}/>
        </View>
        <Text>{error.Email}</Text>
        <View style={ styles.txtview}>
          <TextInput placeholder='password' onChangeText={setpassword}/>
        </View>
        <Text>{error.Password}</Text>

      </View>

      <TouchableOpacity  onPress={()=> validation()} style={styles.touch}>
        <Text style={styles.txtlogin}> Log in</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginview:{
    marginVertical:50,
    marginHorizontal:30
  },
  logintxt:{
    fontSize:30,
    color:"black",
    fontWeight:"bold",
  
  },
  txtview:{
    borderWidth:2,
    borderColor:"black",
    margin:10,
    backgroundColor:"pink",
    borderRadius:10
  
  },
  touch:{
    // borderWidth:2,
    // borderColor:"red",
    marginHorizontal:10,
    borderRadius:10,
    height:50,
    margin:10,
    backgroundColor:"black",
    alignItems:"center",
    
  },
  txtlogin:{
    color:"white",
    top:10,
    fontSize:20,
    fontWeight:"bold"
  }
  
})