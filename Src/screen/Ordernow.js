import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import imgPath from '../assest/Index'


const Ordernow = ({navigation}) => {
    const data = [
        {
            Image: imgPath.upto
        },
        {
            Image: imgPath.upto
        },
        {
            Image: imgPath.upto
        },
    ]
    const renderItem = ({ item }) => {
        return (

            <View style={styles.uptoview}>
                <Image style={styles.img} source={item.Image} />
            </View>
        )
    }

    const Data = [
        {
            pic: imgPath.pannerup,
            N:"Panner",
            name: "Panner Butter Masala",
            rate: "3.8 (500+) 45 mins",
            extra: "EXTRA 20% OFF",
            and: "AND FREE DELIVERY",
            benifit: "BENEFITS",
            Dolar: "$ 9.87",
            ADD: "+  1  -",
            star: imgPath.star
        },
        {
            pic: imgPath.idliup,
            N:"Idli Sambhar",
            name: "Idli Shambar",
            rate: "3.8 (500+) 45 mins",
            extra: "EXTRA 20% OFF",
            and: "AND FREE DELIVERY",
            benifit: "BENEFITS",
            Dolar: "$ 9.64",
            ADD: "+  1  -",
            star: imgPath.star
        },
        {
            pic: imgPath.vegthaliup,
            N:"Veg Thali",
            name: "Veg Thali",
            rate: "3.8 (500+) 45 mins",
            extra: "EXTRA 20% OFF",
            and: "AND FREE DELIVERY",
            benifit: "BENEFITS",
            Dolar: "$ 9.62",
            ADD: "+  1  -",
            star: imgPath.star
        },
        {
            pic: imgPath.snacksup,
            N:"Snacks",
            name: "Snacks",
            rate: "3.8 (500+) 45 mins",
            extra: "EXTRA 20% OFF",
            and: "AND FREE DELIVERY",
            benifit: "BENEFITS",
            Dolar: "$ 9.62",
            ADD: "+  1  -",
            star: imgPath.star
        },
    ]

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.imran}>

                <View style={styles.imgback}>
                    <Image style={styles.imagesize} source={item.pic}/>
                    <Text style={styles.txt}>{item.N}</Text>
                </View>

                <View style={styles.ditels}>
                    <Text style={styles.naa}>{item.name}</Text>
                    <Text style={styles.rate}>{item.rate}</Text>
                    <Text style={styles.benifet}>{item.extra}</Text>
                    <Text style={styles.benifet}>{item.and}</Text>
                    <Text style={styles.benifet}>{item.benifit}</Text>
                    


                    <View style={styles.starr}>
                        <View>
                            <Text>{item.Dolar}</Text>
                            <Image source={item.star}/>
                        </View>
                        <View style={styles.view}>
                            <Text onPress={()=>navigation.navigate('MYCARD')} style={styles.count}>{item.ADD}</Text>
                        </View>
                    </View>
                    
                </View>
                
            </View>
        )
    }
    return (
        <ScrollView>
        <View >

            

            <FlatList
                renderItem={renderItem}
                data={data}
                horizontal />

                <View style={styles.line}></View>

<FlatList
                renderItem={RenderItem}
                data={Data}
                 />





        </View>
         </ScrollView>
    )
}

export default Ordernow

const styles = StyleSheet.create({
    uptoview: {
        // borderWidth:1,
        // borderColor:'red',
        width: 380,
        height: 330,
        margin: 10,
        bottom: 11
    },
    img: {
        width: 380,
        height: 330,
        borderRadius: 10
    },
    line: {
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 10
    },
    imran: {
        // borderWidth: 1,
        // borderColor: 'red',
        width: 360,
        height: 182,
        margin:10,
        flexDirection:'row'
    },
    imgback:{
        // borderWidth:1,
        // borderColor:'red',
        width:180,
        height:179,
        backgroundColor:"pink",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    imagesize:{
        height:140,
        width:165
    },
    txt:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    ditels:{
        // alignSelf:'center',
        // alignItems:'center',
        marginHorizontal:10
    },
    naa:{
        color:'black',
        fontWeight:"bold"
    },
    rate:{
        color:'black'
    },
    benifet:{
        color:"#ff0059"
    },
    starr:{
        flexDirection:"row",
    },
    view:{
        marginLeft:20,
        // borderWidth:1,
        // borderColor:'red',
        width:70,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#ff0059",
        borderRadius:10

    },
    count:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
})