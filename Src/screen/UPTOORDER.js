import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import imgPath from '../assest/Index'

const UPTOORDER = ({navigation}) => {
  const data = [
    {
      image: imgPath.pasta,
      price: "rs. 65",
      name: 'White Pasta',
      with: "with cheese sause",
      count: "+ 1 -"
    },
    {
      image: imgPath.momoss,
      price: "rs. 90",
      name: 'Momos',
      with: "with spicy sause",
      count: "+ 1 -"
    },
    {
      image: imgPath.noodles,
      price: "rs. 209",
      name: 'Noodles',
      with: "with tomato sause",
      count: "+ 1 -"
    },
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageview}>

        <View style={styles.ditels}>
          <Image style={styles.pastaimg} source={item.image} />
        </View>
        <View style={styles.datiles}>
          <Text style={styles.rs}>{item.price}</Text>
          <Text style={styles.rs}>{item.name}</Text>
          <Text>{item.with}</Text>
          <Text style={styles.count}>{item.count}</Text>

        </View>


      </View>
    )
  }
  return (
    <ScrollView>
      <View>

        <View>
          <Image style={styles.backimg} source={require('../assest/images/back.png')} />
          <Text style={styles.txtmy}>My Cart</Text>
        </View>

        <FlatList
          renderItem={renderItem}
          data={data}
        />

        <View style={styles.view}>

          <View style={styles.color}></View>

          <View style={styles.colorview}>

            <View>
              <Text style={styles.item}>item Total</Text>
              <Text style={styles.item}>Delivery Fee | 4.9 Kms.</Text>
            </View>
            <View>
              <Text style={styles.item}>rs. 364</Text>
              <Text style={styles.item}>rs. 29</Text>
            </View>

          </View>

          <View style={styles.this}>
            <Text >This fee goes towards paying your </Text>
            <Text >Delivery Partner fairy</Text>
          </View>
          
          <View style={styles.color}></View>

          <View style={styles.colorview}>

<View>
  <Text style={styles.it}>Delivery Tip </Text>
  <Text style={styles.it}>Texes and charges</Text>
</View>
<View>
  <Text style={styles.addtip}>Add tip</Text>
  <Text style={styles.it}>rs. 20</Text>
</View>

</View>
<View style={styles.color}></View>

<View style={styles.topay}>
  <Text style={styles.it}>TO PAY</Text>
  <Text style={styles.it}>rs. 422</Text>
</View>

<View style={styles.reviews}>
  <Text style={styles.order}>Review your order and address detalls to</Text>
  <Text style={styles.order}>avoid cancellations</Text>
</View>

        

        <View>
<TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('Ordernow')}>
<Text style={styles.btn}> CONFIRM ORDER</Text>
</TouchableOpacity>
</View>

</View>

      </View>
    </ScrollView>
  )
}

export default UPTOORDER

const styles = StyleSheet.create({
  backimg: {
    tintColor: 'black',
    marginVertical: 15,
    marginHorizontal: 10
  },
  txtmy: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: 'black'
  },
  imageview: {
    // borderWidth:1,
    // borderColor:'red',
    width: 350,
    height: 150,
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    // margin:10
  },
  pastaimg: {
    height: 150,
    width: 140,
    borderRadius: 10
  },
  datiles: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  rs: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  count: {
    fontSize: 27,
    backgroundColor: "#ff0059",
    width: 60,
    height: 40,
    color: 'white',
    borderRadius: 10,
    marginVertical: 10
  },
  view: {
    // borderWidth:1,
    // borderColor:'red',
    width: 392,
    height: 450,
    alignSelf: "center",
    backgroundColor: "#FEB860 ",
    borderRadius: 10

  },
  color: {
    borderWidth: 1,
    color: "grey", marginVertical: 20,
    marginHorizontal: 20
  },
  colorview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  it: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold'
  },
  this: {
    marginHorizontal: 10,
    marginVertical: 10

  },
  addtip:{
    color:"#ff0059",
    fontWeight:'bold',
    fontSize:17
  },
  topay:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:20
  },
  reviews:{
    marginVertical:15,
    marginHorizontal:15
  },
  order:{
    fontSize:19
  },
  touch:{
    // borderWidth:1,
    // borderColor:"red",
    width:340,
    height:60,
    alignSelf:"center",
    backgroundColor:"#ff0059",
    borderRadius:15
  },
  btn:{
    color:"white",
    fontSize:29,
    fontWeight:'bold',
    alignSelf:'center',
    marginVertical:10
  }

})