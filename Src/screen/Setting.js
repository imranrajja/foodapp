import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Setting = ({navigation}) => {
    return (
        <ScrollView>
        <View>
           
            <View style={styles.logo}>
                <TouchableOpacity onPress={()=>navigation.navigate('EDIT')}>
                <Image  style={styles.image} source={require('../assest/images/backlogo.png')} />
                </TouchableOpacity>
                <Text style={styles.txt}>SETTINGS</Text>
                
            </View>
            <View style={styles.pic}>
                <Text>PICTURE IN PICTURE MODE</Text>
                </View>

                <View style={styles.view}></View>

                <View style={styles.pink}>
                    <Text style={styles.allow}> Allow Picture in Picture Mode</Text>
                    <Image style={styles.pinkbtn} source={require('../assest/icon/pickback.png')}/>
                </View>
                <View style={styles.gola}>
                    <Image source={require('../assest/icon/gola.png')}/>
                </View>
                <View style={styles.line}></View>

                <View style={styles.prag}>
                    <Text> Pip mode alaws you to live track your order in a small window pinned to one corner of you screen while you nagative to other apps or to the home screen.</Text>
                </View>
                <View style={styles.sms}>
                    <Text style={styles.smstxt}>SMS PREFERENCES</Text>
                </View>

                <View style={styles.prag}>
                    <Text style={styles.order}> Order releted SMS cannot be disable as they are ceitical to provid service</Text>
                </View>
                <View style={styles.line}></View>

                <View style={styles.pink}>
                    <Text style={styles.allow}> Recommendation & Reminders</Text>
                    <Image style={styles.pinkbtn} source={require('../assest/icon/pickback.png')}/>
                </View>
                <View style={styles.gola}>
                    <Image source={require('../assest/icon/gola.png')}/>
                </View>
                <View style={styles.line}></View>

                <View style={styles.prag}>
                    <Text> Keep this on to receive offer Recommendation & timely Reminders based an your interasts</Text>
                </View>
                
        </View>
        </ScrollView>
        
    )
}

export default Setting

const styles = StyleSheet.create({
    image: {
        tintColor: "#000000"
    },
    logo: {
        flexDirection: 'row',
        marginVertical: 40,
        marginHorizontal: 10
    },
    txt: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: -6
    },
    pic:{
        marginLeft:50,
        marginTop:-30
    },
    view:{
        borderWidth:1,color:'gery',
        marginHorizontal:15,
        marginVertical:10
    },
    pink:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginHorizontal:10,
       marginVertical:20 
    },
    allow:{
        color:'black',
        fontSize:18,
        fontWeight:"bold"
    },
    gola:{
        marginLeft:"90%",
        marginTop:-51
    },
    line:{
       borderWidth:1,borderColor:'grey',
       marginHorizontal:10,
       marginVertical:10 
    },
    prag:{
        marginHorizontal:10
    },
    sms:{
        marginVertical:40
    },
    smstxt:{
        color:'black',
        marginHorizontal:10
    },
    order:{
        marginTop:-30
    },
    
})


