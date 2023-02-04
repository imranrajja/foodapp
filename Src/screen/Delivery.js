import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import imgPath from '../assest/Index';

const Delivery = ({navigation}) => {
    const data = [
        {
            sk: imgPath.Bargur,
            Name: "Burger"
        },
        {
            sk: imgPath.pizza,
            Name: "pizza"



        },
        {
            sk: imgPath.snacks,
            Name: "snacks"


        },
        {
            sk: imgPath.Bargur,
            Name: "Burger"

        }
    ];
    const renderItem = ({ item }) => {
        return (
            <View>


                <View style={styles.burger}>
                    <Image source={item.sk} />
                    <Text style={styles.name}>
                        {item.Name}
                    </Text>


                </View>
            </View>
        )
    }
    const Data = [
        {
            ir: imgPath.cheesepizza,
            Name: "Cheesepizza",
            km:"2 Km",
            oliva: "Oliva food",
            pink:"$8.88",
            irr:imgPath.star,
            rating: "4.7 (940 Rating)"
        },
        {
            ir: imgPath.cheesepizza,
            Name: "Cheesepizza",
            km:"2 Km",
            oliva: "Oliva food",
            pink:"$8.88",
            irr:imgPath.star,
            rating: "4.7 (940 Rating)"
        },
        {
            ir: imgPath.cheesepizza,
            Name: "Cheesepizza",
            km:"2 Km",
            oliva: "Oliva food",
            pink:"$8.88",
            irr:imgPath.star,
            rating: "4.7 (940 Rating)"
        },
        {
            ir: imgPath.cheesepizza,
            Name: "Cheesepizza",
            km:"2 Km",
            oliva: "Oliva food",
            pink:"$8.88",
            irr:imgPath.star,
            rating: "4.7 (940 Rating)"
        }
    ]
    const RenderItem = ({ item }) => {
        return (
            <View>
                <View style={styles.cheese}>
                    <View>
                    <Image source={item.ir} />
                    </View>
                    <View style={styles.main}>
                        <View style={styles.pizzaview}>
                        <Text style={styles.namepizza}>
                            {item.Name}
                        </Text>
                        <Text>{item.km}</Text>
                        </View>
                      <View style={styles.dolar}>
                        <Text>
                            {item.oliva}
                        </Text>
                        <Text style={styles.pink}>
                            {item.pink}
                        </Text>
                        </View>
                        <View style={styles.star}>
                            <Image source={item.irr}/>
                        <Text>
                            {item.rating}
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <View>

                <View>
                    <Image style={styles.img} source={require('../assest/images/user.png')} />
                </View>
                <View>
                    <Text style={styles.Delivery}>DELIVERY TO</Text>
                </View>
                <View style={styles.loction}>
                    <View>
                        <Image source={require('../assest/images/pinkloction.png')} />
                    </View>
                    <View>
                        <Text style={styles.home}>HOME. MOHALLA SHIPYAAN,PARBATSAR</Text>

                    </View>
                </View>
                <View style={styles.search}>
                    <View style={styles.input}>
                        <TextInput style={styles.food} placeholder='Search for food' />
                    </View>
                    <View>
                        <Image source={require('../assest/images/pinkbox.png')} />
                    </View>
                </View>
                <View style={styles.pinklogo}>
                    <View>
                        <Image style={styles.logoserch} source={require('../assest/images/search.png')} />
                    </View>
                    <View>
                        <Image style={styles.whitelogo} source={require('../assest/images/pinkic.png')} />
                    </View>
                </View>
                <View style={styles.uptooff}>
                    <Image style={styles.off} source={require('../assest/images/uptoff.png')} />
                    <View style={styles.imranview}>
                        <Text style={styles.imran}>Up to</Text>
                        <Text style={styles.rajja}> 60% OFF</Text>
                    </View>

                </View>

                <View style={styles.cateview}>
                    <Text style={styles.categories}>Categories</Text>
                </View>
                <FlatList
                    renderItem={renderItem}
                    data={data}
                    horizontal
                />

                <View>
                    <Text style={styles.popular}>Popular Dishes</Text>
                </View>

                <FlatList
                    renderItem={RenderItem}
                    data={Data}
                    horizontal
                />

                <TouchableOpacity activeOpacity={0.5} style={styles.touch} 
                onPress={()=>navigation.navigate('FOODMENU')}>
                    <Text style={styles.button}>EXPLORE Food</Text>

                </TouchableOpacity>


            </View>
        </ScrollView>
    )
}

export default Delivery

const styles = StyleSheet.create({
    img: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    Delivery: {
        marginHorizontal: 50
    },
    loction: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 10
    },
    home: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 5

    },
    input: {
        backgroundColor: '#A1A1A1',
        width: '83%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    food: {
        fontSize: 20
    },
    pinklogo: {
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        marginTop: -45
    },
    logoserch: {
        marginLeft: 10
    },
    whitelogo: {
        marginRight: 15
    },
    uptooff: {
        marginVertical: 30,
        width: "100%"

    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',

    },
    khan: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    upto: {
        // marginTop:-240,
        alignSelf: 'center',

    },
    off: {
        width: "95%",
        alignSelf: 'center',
        borderRadius: 10
    },
    imran: {
        fontSize: 25,
        // marginTop:-187,

        color: 'white',
        fontWeight: 'bold'
    },
    imranview: {
        position: "absolute",
        top: 20,
        alignSelf: "center"
    },
    rajja: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    cateview: {
        marginTop: -20,
        marginHorizontal: 10
    },
    categories: {
        fontSize: 17,
        color: "black",
        fontWeight: 'bold'
    },
    burger: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: "red",
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#FF0059",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        color: "white",
        fontSize: 25
    },
    popular: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold'
    },
    cheese: {
        height: 250,
        width: 300,
        // borderWidth: 1,
        // borderColor: 'red',
        margin: 10,
        borderRadius: 10

    },
    pizzaview:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    namepizza:{
        color:'black',
        fontSize:17,
        fontWeight:'bold'
    },
    main:{
        marginHorizontal:10
    },
    star:{
        flexDirection:'row'
    },
    dolar:{
flexDirection:'row',
justifyContent:'space-between'
    },
    pink:{
        fontSize:15,
        backgroundColor:'#ff0059',
        color:'white'
    },
    touch:{
        // borderWidth:1,
        // color:'red',
        width:360,
        height:60,
        alignSelf:'center',
        backgroundColor:"#ff0059",
        borderRadius:10,
        alignItems:"center",
        justifyContent:'center'
        
    },
    button:{
        alignSelf:"center",
        color:"white",
        fontSize:20,
        fontWeight:'bold'
    }

})