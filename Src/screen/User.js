import { StyleSheet, Text, View,ImageBackground,Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const User = ({navigation}) => {
  return (
    <ScrollView>
    <View>
      
      <ImageBackground style={styles.screen}  source={require('../assest/images/userimg.jpg')}>
        <View>
          <Image  style={styles.user} source={require('../assest/images/username.png')} />
        </View>
      </ImageBackground>

<View>
    <View style={styles.white}>
        <View style={styles.full}>
            <Text style={styles.ik}>Full Name</Text>
            <TouchableOpacity
            onPress={() =>navigation.navigate('EDIT')}>
            <Text style={styles.edit}>EDIT</Text>
            </TouchableOpacity>
        </View>

        <View>
            <View style={styles.my}>
            <Text style={styles.ik}>My Account</Text>
            <Text>Favourites,Offers & Setting</Text>
            </View>
            <View style={styles.my}>
            <Text style={styles.ik}>Addresses</Text>
            <Text>Share,Edit & Add New Addresses</Text>
            </View>
            <View style={styles.my}>
            <Text style={styles.ik}>Payments & Refunds</Text>
            <Text>Refunds Status & Payments Modes</Text>
            </View>
            <View style={styles.help}>
            <Text style={styles.ik}>Help</Text>
            <Text>FAQ & Links</Text>
            </View>
            <View style={styles.help}>
            <Text style={styles.LOGOUT}>LOGOUT</Text>
            
            </View>

        </View>
    </View>
</View>


    </View>
    </ScrollView>
  )
}

export default User

const styles = StyleSheet.create({

    screen:{
        height:400,
    },
    user:{
        alignSelf:'center',
        marginTop:60
    },
    white:{
        backgroundColor: 'white',
    width: '90%',
    height: 500,
    alignSelf: 'center',
    marginTop: -180,
    borderWidth:1,borderColor:'grey'
    },

    full:{
flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor:'pink',
    width:'90%',
    padding:10,
    borderRadius:10,
    marginVertical:10,
    justifyContent:"space-between",
    borderWidth:1,borderColor:'grey'
    },
    edit:{
        color:'red'
    },
    my:{
        backgroundColor:'pink',
        width:'90%',
        padding:13,
        borderRadius:10,
        marginVertical:10,
        alignSelf:'center',
        borderWidth:1,borderColor:'grey'
    },
    ik:{
        color:'black',
        
    },
    help:{
        
    alignSelf: 'center',
    backgroundColor:'pink',
    width:'90%',
    padding:5,
    borderRadius:10,
    marginVertical:10,
    borderWidth:1,borderColor:'grey'
    },
    LOGOUT:{
        color:'black',
        fontSize:15,
        fontWeight:'bold'
    }
})