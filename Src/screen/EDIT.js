import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const EDIT = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.name}>
                    <View>
                        <Text style={styles.rajja}>IMRAN RAJJA</Text>
                        <Text>+919587198288</Text>
                    </View>
                    <View>
                        <Text style={styles.edit}>EDIT</Text>
                    </View>
                </View>
                <View style={styles.line}></View>

                <View style={styles.name}>
                    <View>
                        <Text style={styles.rajja}>My Account</Text>
                        <Text>Favourites,Offers & Setting</Text>
                    </View>
                    <View>
                        <Image source={require('../assest/images/up.png')} />
                    </View>
                </View>
                <View style={{ alignItems: "center" }}><Text>----------------------------------------------------------------------------------------</Text></View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                        <View style={styles.dil}>

                            <Image source={require('../assest/images/dil.png')} />
                            <Text style={styles.fav}>Favourites</Text>
                        </View>
                        <View style={styles.next}>
                            <Image source={require('../assest/icon/next.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.parsent}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Offers')}>
                    <View style={styles.dil}>
                        <Image source={require('../assest/images/parsent.png')} />
                        <Text style={styles.offer}>Offers</Text>
                    </View>
                    <View style={styles.next}>
                        <Image source={require('../assest/icon/next.png')} />
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.setting}>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <View style={styles.dil}>
                            <Image source={require('../assest/images/setting.png')} />
                            <Text style={styles.set}>Setting</Text>
                        </View>
                        <View style={styles.next}>
                            <Image source={require('../assest/icon/next.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.line2}></View>

                <View style={styles.name}>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Address')}>
                        <Text style={styles.rajja}>Addresses</Text>
                        <Text>Share,Edit & New Addresses</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.next2}>
                        <Image source={require('../assest/icon/next.png')} />
                    </View>
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
                <View style={styles.line3}></View>


                <View style={styles.name}>
                    <View>
                        <Text style={styles.rajja}>Payments & Refunds</Text>
                        <Text>Refund Status & Payment Modes</Text>
                    </View>
                    <View>
                        <Image source={require('../assest/images/up.png')} />
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text>--------------------------------------------------------------------------------------------</Text>
                </View>


                <View style={styles.name}>
                    <View>
                        <Text style={styles.rajja}>Help</Text>
                        <Text>FAQ & Links</Text>
                    </View>
                    <View style={styles.next2}>
                        <Image source={require('../assest/icon/next.png')} />
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default EDIT

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
    line2: {
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 40,
        width: "90%",
        alignSelf: "center"

    },
    dil: {

        alignSelf: 'center',
        width: '90%',
        padding: 10,
        marginVertical: 10,
        justifyContent: "flex-start",
        flexDirection: 'row'
    },
    fav: {
        marginLeft: 20,
        color: 'black',
        fontSize: 17,
        fontWeight: "bold",
        marginTop: -3

    },
    next: {
        marginLeft: "88%",
        marginTop: -35,

    },
    offer: {
        marginLeft: 29,
        color: 'black',
        marginTop: -10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    parsent: {
        marginVertical: 10
    },
    setting: {
        marginVertical: -10,
        // borderWidth:1
    },
    set: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: -3
    },
    next2: {
        marginVertical: 10,
        marginRight: 10
    },
    box: {
        // borderWidth:1,
        // color:'red',
        width: "92%",
        height: 90,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#DCC8C8',
        borderRadius: 10
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
    line3: {
        borderWidth: 1,
        color: 'grey',
        marginHorizontal: 10,
        marginVertical: 20
    }

})