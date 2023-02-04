import { StyleSheet, Text, View,Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import imgPath from '../assest/Index'

const FOODMENU = ({navigation}) => {
  const data=[
    { 
      ir:imgPath.momos,
      name:'momos'
    },
    {
      ir:imgPath.momos,
      name:'momos'
    },
    {
      ir:imgPath.momos,
      name:'momos'
    },
    {
      ir:imgPath.momos,
      name:'momos'
    },
  ]
  const renderItem=({item})=>{
    return(
      <View style={styles.momosview}>

<View>
  <Image style={styles.momos} source={item.ir}/>
  <Text style={styles.txt}>{item.name}</Text>
</View>
      </View>
    )
  }
  const Data=[
    {
      new:'New',
      imran:'chole Bhature',
      chole:imgPath.chole,
      price:"$ 9.62",
      add:'Add',

    },
    {
      new:'New',
      imran:'chole Bhature',
      chole:imgPath.chole,
      price:"$ 9.62",
      add:'Add',
    },
  ]
  const RenderItem=({item})=>{
    return(
      <View style={styles.chole}>
        <View>
        <Text style={styles.new}>{item.new}</Text>
        <Image style={styles.pic} source={item.chole}/>
        <Text style={styles.bhature}>{item.imran}</Text>
        </View>
        <View style={styles.dolarview}>
          <Text style={styles.dolar}>{item.price}</Text>
          <Text style={styles.addr}>{item.add}</Text>
        </View>
      </View>
    )
  }

  const DData = [
    {
      pics:imgPath.panjabi,
      nam:"punjabi Thali"
    },
    {
      pics:imgPath.pannerpiza,
      nam:"Paneer Pizza"
    },
    {
      pics:imgPath.panjabi,
      nam:"punjabi Thali"
    },
  ]

  const RrenderItem =({item})=>{
    return(

      <View style={styles.thaliview}>
        <View>
          <Image source={item.pics}/>
          <Text style={styles.thali}>{item.nam}</Text>
        </View>
      </View>
    )
  }
  const DDData=[
    {
      piks:imgPath.upto
    },
    {
      piks:imgPath.upto
    },
    
  {
    piks:imgPath.upto
  },
    {
      piks:imgPath.upto
    },
  ]

  const RRRnderitem= ({item})=>{
    return(
      <View style={styles.upto}>
        <Image style={styles.uptoimg} source={item.piks}/>
      </View>
    )
  }
  return (
    <ScrollView>

    <View>
      <View>
        <Image style={styles.img} source={require('../assest/images/user.png')}/>
      </View>
      <View style={styles.foodview}>
        <Text style={styles.food}>FOOD MENU</Text>
      </View>
      <View style={styles.line}></View>

      <View>
        <Text style={styles.choose}>choose your best food have a great day</Text>
      </View>

      <FlatList 
      renderItem={renderItem}
      data ={data}
      horizontal/>

      <View>
        <Text style={styles.more}>More</Text>
      </View>

      <FlatList 
      renderItem={RenderItem}
      data = {Data}
      horizontal/>

      <View>
        <Text style={styles.populer}>Populer Dishes</Text>
      </View>

      <FlatList
      renderItem={RrenderItem}
      data={DData}
      horizontal/>

      <FlatList
      renderItem={RRRnderitem}
      data={DDData}
      horizontal/>
<View>
<TouchableOpacity activeOpacity={0.5} style={styles.touch} onPress={()=>navigation.navigate('UPTOORDER')} >
  <Text style={styles.order}>ORDER NOW</Text>
</TouchableOpacity>
</View>

    </View>
    </ScrollView>
  )
}

export default FOODMENU

const styles = StyleSheet.create({
  img:{
    marginVertical:10,
    marginHorizontal:10
  },
  foodview:{
    alignSelf:'center'
  },
  food:{
    fontSize:25,
    fontWeight:'bold',
    color:'#ff0059'
  },
  line:{
    borderWidth:2,
    color:'pink',
    width:140,
    alignSelf:'center'
  },
  choose:{
    alignSelf:'center'
  },
  momosview:{
    // borderWidth:1,
    // color:'black',
    width:150,
    height:150,
    margin:10,
    marginVertical:30,
    backgroundColor:'#ff0059',
    borderRadius:10,
    alignSelf:'center',
    // alignItems:'center',
    justifyContent:'center'
    
  },
  momos:{
    width:140,
    height:90
  },
  txt:{
    alignSelf:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  more:{
    fontSize:25,
    color:'black',
    fontWeight:'bold',
    marginHorizontal:20,
    marginTop:-20
  },
  chole:{
    // borderWidth:1,
    // borderColor:'red',
    width:160,
    height:180,
    margin:10,
    marginHorizontal:20,
    backgroundColor:"#C4C4C4",
    borderRadius:10
    
  },
  new:{
    alignSelf:'center',
    backgroundColor:"#ff0059",
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    height:20,
    width:40
  },
  pic:{
    width:150,
    height:100
  },
  bhature:{
    alignSelf:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:18
  },
  dolarview:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    marginVertical:8

  },
  dolar:{
    fontWeight:"bold",
    fontSize:15
  },
  addr:{
    backgroundColor:"#ff0059",
    color:'white',
    fontSize:17,
    fontWeight:'bold',
    borderRadius:10,
    width:40,
    
  },
  populer:{
    marginHorizontal:10,
    fontWeight:"bold",
    color:'black'
  },
  thaliview:{
    // borderWidth:1,
    // color:'red',
    width:160,
    height:200,
    margin:10,
    borderRadius:10
  },
  thali:{
    color:'black',
    fontWeight:'bold',
    fontSize:16
  },
  upto:{
    // borderWidth:1,
    // borderColor:"red",
    width:320,
    height:220,
    margin:10,
    borderRadius:10
  },
  uptoimg:{
    width:320,
    height:220,
    alignSelf:'center',
    // alignItems:'center',
    // justifyContent:'center',
    borderRadius:10
  },
  touch:{
    alignSelf:'center',
    height:60,
    backgroundColor:'#ff0059',
    width:300,
    borderRadius:10,
    bottom:10,
    marginVertical:10
  },
  order:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    alignSelf:'center',
    alignItems:'center',
    marginVertical:5
  }
  
})