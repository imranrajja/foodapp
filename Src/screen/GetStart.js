import { Button, StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const GetStart = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <ImageBackground source={require('../assest/images/img2.webp')} style={{ alignItems: 'center' }}>
        <View>
          <Image source={require('../assest/images/bike.png')} />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.order}>
          <Text style={styles.txt1}> Order from a wide range of restaurant</Text>
        </View>

        <View style={styles.bindu}>
          <Text style={styles.txt2}>. . .</Text>
        </View>

        <View style={styles.txt3}>
          <Text>Ready from a wide range of restaurants </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.touch} onPress={() =>navigation.navigate('Login')}>
            <Text style={styles.butt}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </ScrollView>
  )
}

export default GetStart

const styles = StyleSheet.create({

  order: {
    alignSelf: 'center',
    marginVertical: 15,

  },
  txt1: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold'
  },
  bindu: {
    alignSelf: 'center',

  },
  txt2: {
    color: 'black',
    fontSize: 40
  },
  txt3: {
    alignSelf: 'center',

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
  }

})