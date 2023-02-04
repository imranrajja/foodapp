import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Help = ({navigation}) => {
    return (
        <ScrollView>
        <View>

            <View style={styles.main}>

                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
                    <Image style={{ tintColor: "black" }} source={require('../assest/images/backlogo.png')} />
                    </TouchableOpacity>
                </View>
                <View >
                    
                    <Text style={styles.name}>HELP & SUPPORT</Text>
                    
                </View>

            </View>
            <View style={styles.line}></View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Delivery')}>
                <Text style={styles.text}>I want to partner my resturant with swiggy</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.second}></View>

            <View>
                <Text style={styles.text}>what are the mandatory documents needed to list my restaurant on swiggy?</Text>
            </View>
            <View style={styles.second}></View>

            <View>
                <Text style={styles.text}>what are the mandatory documents needed to list my restaurant on swiggy ?</Text>
            </View>
            <View style={styles.second}></View>
            <View>
                <Text  style={styles.text}>what are the mandatory documents needed to list my restaurant on swiggy ?</Text>
            </View>
            <View style={styles.second}></View>

            <View>
                <Text style={styles.text}>what are the mandatory documents needed to list my restaurant on swiggy ?</Text>
            </View>
            <View style={styles.second}></View>

        </View>
        </ScrollView>
    )
}

export default Help

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        marginVertical: 40,
        marginHorizontal: 20
    },
    name: {
        marginHorizontal: 15,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'

    },
    line: {
        borderWidth: 1,
        color: "grey",
        marginHorizontal:10
    },
    text:{
        color:'black',
        marginHorizontal:10,
        marginVertical:20,
        marginLeft:20
        
    },
    second:{
        borderColor:'grey',
        borderWidth:1,
        marginHorizontal:10
    }
})