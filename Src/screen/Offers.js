import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Offers = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <View style={styles.name}>
                    <View>
                        <Text style={styles.rajja}>IMRAN RAJJA</Text>
                        <Text>+919587198288</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('User')}>
                            <Text style={styles.edit}>EDIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.line}></View>

                <View style={styles.name}>
                    <View>
                        <Text style={styles.rajja}>My Account</Text>
                        <Text>Favourites,Offers & Setting</Text>
                    </View>
                    <View>
                        <Image source={require('../assest/images/down.png')} />
                    </View>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <Text>---------------------------------------------------------------------------------------</Text>
                </View>

                <View style={styles.add}>

                    <Text style={styles.rajja}>Addresses</Text>
                    <Text>Share,Edit & New Addresses</Text>

                </View>


                <View style={styles.box}>
                    <View>
                        <Image source={require('../assest/images/home.png')} style={styles.homelogo} />
                    </View>
                    <View>
                        <Text style={styles.did}> Did you know?</Text>
                        <Text style={styles.family}>you can now share addresses with friends and family using a samrt link!</Text>
                    </View>

                </View>

                <View style={styles.line}></View>

                <View style={styles.name}>
                    <View>
                        <Text style={styles.rajja}>Payments & Refunds</Text>
                        <Text>Refund Status & Payment Modes</Text>
                    </View>
                    <View>
                        <Image source={require('../assest/images/up.png')} />
                    </View>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text>---------------------------------------------------------------------------------------</Text>
                </View>

                <View style={styles.setting}>

                    <View style={styles.dil}>
                        <Image source={require('../assest/icon/refund.png')} />
                        <Text style={styles.set}>Refund Status</Text>
                    </View>
                    <View style={styles.next}>
                        <Image source={require('../assest/icon/next.png')} />
                    </View>

                </View>

                <View style={styles.setting}>

                    <View style={styles.dil}>
                        <Image source={require('../assest/icon/payment.png')} />
                        <Text style={styles.set}>Payment Modes</Text>
                    </View>
                    <View style={styles.next}>
                        <Image source={require('../assest/icon/next.png')} />
                    </View>

                </View>

                <View style={styles.sk}></View>

                <View style={styles.name}>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Help')}>
                        <Text style={styles.rajja}>Help</Text>
                        </TouchableOpacity>
                        <Text>FAQ & Links</Text>
                    </View>
                    <View style={styles.last}>
                        <Image source={require('../assest/icon/next.png')} />
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Offers

const styles = StyleSheet.create({

    name: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "space-between",

    },

    rajja: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    edit: {
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold'

    },
    line: {
        borderWidth: 1,
        borderColor: 'grey',
        width: "90%",
        alignSelf: "center"
    },
    rajja: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    add: {
        marginLeft: 30
    },
    box: {
        // borderWidth:1,
        // color:'red',
        width: "92%",
        height: 90,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#DCC8C8',
        borderRadius: 10,
        marginVertical: 20
    },
    homelogo: {
        marginLeft: 10,
        marginVertical: 10
    },
    did: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft: 5
    },
    family: {
        marginTop: -15,
        marginLeft: 3,
        fontSize: 15
    },
    line: {
        borderWidth: 1,
        borderColor: "grey",
        marginHorizontal: 10
    },
    dil: {

        alignSelf: 'center',
        width: '90%',
        padding: 10,
        marginVertical: 10,
        justifyContent: "flex-start",
        flexDirection: 'row'
    },
    set: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: -3
    },
    next: {
        marginLeft: "88%",
        marginTop: -35,
    },
    sk: {
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 10,
        marginHorizontal: 10
    },
    last: {
        marginVertical: 10
    }

})