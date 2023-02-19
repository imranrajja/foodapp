import { StyleSheet, Text, View, Image, ImageBackground, TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import OtpScreen from '../assest/component/UI/OtpScreen'
import Input from '../assest/component/UI/Input'

const OTP = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <ImageBackground style={styles.back} source={require('../assest/images/redimg.jpg')}>
        <View>
          <Image source={require('../assest/images/imgotp.png')} />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.white}>
          <View >
            <Text style={styles.otp}>OTP</Text>
          </View>

          <View style={styles.main}>
            <Text style={styles.number}>Enter OTP Send To </Text>
            <Text style={styles.ak}>9587198288</Text>
          </View>
          <OtpScreen/>

          <View>
          <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('User')}  >
            <Text style={styles.butt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
       

        <View style={styles.main}>
            <Text style={styles.number}>Did't Receive the OTP? </Text>
            <Text onPress={()=>navigation.navigate('OTP')} style={styles.ak}>RESEND </Text>
          </View>
      

        </View>

      </View>





    </View>
    </ScrollView>
  )
}

export default OTP

const styles = StyleSheet.create({

  white: {
    backgroundColor: 'white',
    width: '90%',
    height: 450,
    alignSelf: 'center',
    marginTop: -150,
    borderWidth:1,borderColor:'grey'

  },
  back: {
    height: 500
  },
  otp: {
    fontSize: 30,
    color: 'black',
    marginVertical: 10,
    marginLeft: 10,

  },
  number: {
    color: 'black'
  },
  ak: {
    color: 'red'
  },
  main: {
    flexDirection: 'row',
    alignSelf: 'center'
  },

  touch: {
    alignSelf: 'center',
    marginVertical: 30,
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