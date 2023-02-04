import { StyleSheet, Text,View, ImageBackground, Image, TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <ImageBackground source={require('../assest/images/redimg.jpg')} style={{ alignItems: 'center' }}>
        <View>
          <Image source={require('../assest/images/dilvery.png')} />
        </View>
      </ImageBackground>

      <View>

        <View style={styles.white}>
          <Text style={styles.UP}> Sign Up</Text>
          <View style={styles.input}>
            <TextInput placeholder='Enter Email Id / Phone No'/>
          </View>

          <View style={styles.input2}>
            <TextInput placeholder='Enter Email Id / Phone No'/>
          </View>

          <View style={styles.input2}>
            <TextInput placeholder='Enter Email Id / Phone No'/>
          </View>

          <View>
          <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('OTP')}  >
            <Text style={styles.butt}>SIGN UP </Text>
          </TouchableOpacity>
        </View>






        </View>
        
        
        
      </View>
    </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({

  white: {
    height: 410,
    width: "90%",
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: -80,
    borderWidth: 1, borderColor: 'grey'
  },

  UP:{
    fontSize:30,
    marginVertical:20,
    color:'black',
    fontWeight:'bold'
  },
  input:{
    backgroundColor: 'pink',
    width: "90%",
    borderRadius: 10,
    alignSelf: 'center',
    
  },
  input2:{
    backgroundColor: 'pink',
    width: "90%",
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical:10
  },

  input3:{
    backgroundColor: 'pink',
    width: "90%",
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical:10
  },
  touch: {
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: 'red',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  butt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },

})