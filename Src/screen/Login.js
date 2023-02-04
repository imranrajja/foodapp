import { StyleSheet, Text, TextInput, View, Image, ImageBackground, Button, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
  const [email, setemail] = useState('')
  const [pasword, setpasword] = useState('')
  const [error, seterror] = useState({
    Email: '',
    Pasword: ''
  })
  const validition = () => {
    seterror({
      Email: email ? "" : "Invalide Email",
      Pasword: pasword ? '' : "Invalid Paswoed"
    }

    )
    if (error.Email == '' && error.Pasword == '') {
      navigation.navigate('OTP')

    }
  }

  return (
    <ScrollView>
      <View>
        <ImageBackground source={require('../assest/images/pink.png')} style={{ alignItems: 'center', height: 400 }}>
          <View>
            <Image source={require('../assest/images/megi.png')} />
          </View>
        </ImageBackground>

        <View style={styles.white}>
          <Text style={styles.Login}>Login</Text>

          <View style={styles.email}>
            <TextInput placeholder='Email' onChangeText={setemail} />
          </View>
          <Text>{error.Email}</Text>



          <View style={styles.password}>
            <TextInput placeholder='Password' onChangeText={setpasword} />
          </View>
          <Text>{error.Pasword}</Text>


          <View style={styles.forgot}>
            <Text>Forgot Password</Text>
          </View>

          <View style={{ height: 1, width: '80%', backgroundColor: 'grey', alignSelf: 'center', marginVertical: 30 }}></View>
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ marginTop: -43, backgroundColor: 'grey', borderRadius: 20, fontSize: 20, fontWeight: 'bold' }}>OR</Text>
          </View>

          <View style={styles.icon}>
            <Image source={require('../assest/icon/facebook.png')} style={styles.img} />
            <Image source={require('../assest/icon/google.png')} style={styles.img} />
          </View>

          <View>
            <TouchableOpacity style={styles.touch} >
              <Text onPress={() => validition()} style={styles.butt}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: -15 }}>
            <Text style={styles.account}>Dont't have an account ? </Text>
            <Text style={{ color: 'red' }} onPress={() => navigation.navigate('Signup')}>Register</Text>
          </View>




        </View>


      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({

  white: {
    height: 410,
    width: "90%",
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: -110,
    borderWidth: 1, borderColor: 'grey'
  },

  Login: {
    marginVertical: 20,
    fontSize: 30,
    color: 'black',
    marginLeft: 10,

  },

  email: {
    backgroundColor: 'pink',
    width: "90%",
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: -10



  },

  password: {
    backgroundColor: 'pink',
    width: "90%",
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10
  },
  forgot: {
    paddingRight: 20,
    alignItems: "flex-end"
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'center',


  },
  img: {
    marginHorizontal: 5,
    width: 30,
    height: 30
  },
  log: {
    alignSelf: 'center',

    backgroundColor: 'red',
    width: '90%',
    padding: 12,
    borderRadius: 10,
    textAlign: 'center',
    marginVertical: 10,
  },

  imr: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  touch: {
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: 'red',
    width: '70%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'

  },
  butt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  account: {

    alignSelf: 'center',
    color: 'black'
  },








})