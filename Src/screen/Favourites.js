import { ImageBackground, StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'

const Favourites = () => {
  return (
    <ScrollView>
    <View>
      <View>
      <ImageBackground source={require('../assest/images/redback.jpg')}>
         <Text style={styles.Favourites}>FAVOURITES</Text>
         <View style={styles.view}></View>
      <View style={styles.round}>
      
        <Image source={require('../assest/images/hhhh.png')}/>
      </View>
      </ImageBackground>
      </View>




      <View style={styles.white}>
        <View style={styles.where}>
          <Text style={styles.text}>WHERE IS THE LOVE?</Text>
          </View>

          <View style={styles.onceview}>
            <Text style={styles.oncetxt}>Once you favourite a restaurant,it will appeear here</Text>
          </View>
      </View>

      
    </View>
    </ScrollView>
  )
}

export default Favourites

const styles = StyleSheet.create({
  round:{
    height:400,
    alignSelf:'center',
    justifyContent:'center',
    
  },
  Favourites:{
    marginTop:20,
    marginLeft:30,
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    
  },
  view:{
    borderWidth:1,
    borderColor:'white',
    marginHorizontal:10,
    marginVertical:10
  },
  where:{
    alignSelf:"center",
    marginVertical:30,
    
  },
  text:{
    color:'black',
    fontSize:25,
    fontWeight:"bold"
  },
  onceview:{
    marginTop:-10,
    alignSelf:'center',
    
  },
  oncetxt:{
    color:'black'
  }
})