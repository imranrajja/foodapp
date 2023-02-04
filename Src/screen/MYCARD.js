import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const MYCARD = () => {
    return (
        <ScrollView>
            <View>

                <View style={styles.imgview}>
                    <Image style={styles.img} source={require('../assest/images/mobile.png')} />
                </View>
                <View>
                    <Text style={styles.delivery}>Delivery</Text>
                </View>

                <View style={styles.changeview}>
                    <View>
                        <Text style={styles.address}>Address details</Text>
                    </View>
                    <View>
                        <Text style={styles.change}>Change</Text>
                    </View>
                </View>

                <View style={styles.imranview}>

                    <View>
                        <Text style={styles.imran}>IMRAN RAJJA</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <Text style={styles.km}>
                            Km2 station road,offsite shaipyaan mohalla road, parbatsar
                        </Text>
                    </View>
                    <View style={styles.line}></View>

                    <View>
                        <Text style={styles.number}>+9587198288</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.method}>
                        Delivery method.
                    </Text>
                </View>

                <View style={styles.doorview}>

                    <View style={styles.pink}>
                        <Image source={require('../assest/images/pinkgol.png')} />
                        <Text style={styles.doortxt}>Door Delivery</Text>
                    </View>

                    <View style={styles.line}></View>
                    <View style={styles.pickupview}>
                        <Image source={require('../assest/images/whitegol.png')} />
                        <Text style={styles.doortxt}>Pick up</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.mmm}>Delivery method.</Text>
                </View>
                <View style={styles.doorview}>

                    <View style={styles.pink}>
                        <Image source={require('../assest/images/card.png')} />
                        <Text style={styles.doortxt}>Card</Text>
                    </View>

                    <View style={styles.line}></View>
                    <View style={styles.pickupview}>
                        <Image source={require('../assest/images/bankaccount.png')} />
                        <Text style={styles.doortxt}>Bank account</Text>
                    </View>
                </View>

                <View style={styles.total}>
                    <Text style={styles.tott}>Total</Text>
                    <Text style={styles.payment}>Rs.250</Text>

                </View>

                <TouchableOpacity>
<View style={styles.pro}>
    <Text style={styles.pay}>PROCEED TO PAYMENTS</Text>
</View>
</TouchableOpacity>









            </View>
        </ScrollView>
    )
}

export default MYCARD

const styles = StyleSheet.create({
    img: {
        width: 390,
        height: 350
    },
    delivery: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    changeview: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    address: {
        marginHorizontal: 20,
        color: 'black'
    },
    change: {
        marginHorizontal: 20,
        color: 'pink',
        fontWeight: 'bold'
    },
    imranview: {
        // borderWidth:1,
        // color:'red',
        height: 160,
        marginVertical: 20,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 10

    },
    imran: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    line: {
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 15
    },
    km: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    number: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    method: {
        marginHorizontal: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25
    },
    doorview: {
        backgroundColor: '#C4C4C4',
        height: 110,
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 10
    },
    pink: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 20
    },
    doortxt: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -5
    },

    pickupview: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10
    },
    mmm: {
        marginHorizontal: 15,
        marginVertical: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    total:{
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:40,
        justifyContent:'space-between'
    },
    tott:{
        color:'black',
        fontWeight:'bold',
        fontSize:15
    },
    payment:{
        color:"black",
        fontWeight:'bold',
        fontSize:15
    },
    pro:{
        alignSelf:'center',
        marginVertical:20,
        // borderWidth:2,borderColor:'blue',
        width:"80%",
        height:50,
        alignItems:'center',
        backgroundColor:'red',
        borderRadius:10
    },
    pay:{
        // backgroundColor:'red',
        color:'white',
        fontSize:20,
        marginVertical:8,
        fontWeight:'bold'

    }

})