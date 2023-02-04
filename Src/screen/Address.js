import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Address = ({ navigation }) => {
  return (
    <ScrollView>
      <View>



        <View style={styles.main}>
          <View style={styles.box}>
            <Image source={require('../assest/icon/box.png')} />
          </View>
          <View style={styles.now}>
            <Text style={styles.tap}>NOW, SHARE ADDRESSES WITH A TAP!</Text>
          </View>
          <View style={styles.loction}>
            <View>
              <Image source={require('../assest/icon/loction.png')} />
            </View>
            <View>
              <Text style={styles.send}>Send exact addresses to anyone using smart links </Text>
            </View>
          </View>

          <View style={styles.khanss}>
            <View>
              <Image style={styles.img} source={require('../assest/icon/loction.png')} />
            </View>
            <View>
              <Text style={styles.khan}>Saving someone's Address? Add receiver's phone namber and forget delivery hassies </Text>
            </View>
          </View>

        </View>

        <View style={styles.save}><Text style={styles.txt}> SAVED ADDRESSES</Text></View>

        <View style={styles.secondbox}>

          <View style={styles.add}>
            <View>
              <Image source={require('../assest/icon/home.png')} />
            </View>
            <View>
              <Text style={styles.home} >HOME</Text>
            </View>

          </View>
          <View style={styles.km} >
            <Text>Km 5 Shipyaan mohalla oppsite station road,parbatsar (nagaur)</Text>
          </View>
          <View style={styles.number}><Text>Phone Number:+9587198288</Text></View>

          <View style={styles.edit}>
            <Text style={styles.ed}>EDIT</Text>
            <Text style={styles.dile}>DILETE</Text>
            <Text style={styles.share}>SHARE</Text>
          </View>

          <View style={styles.line}></View>

          <TouchableOpacity onPress={()=>navigation.navigate('EDIT')}>
            <View style={styles.but}>
              <Text style={styles.new}>ADD NEW ADDRESS</Text>

            </View>
          </TouchableOpacity>

        </View>





      </View>
    </ScrollView>
  )
}

export default Address

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    marginVertical: 60,
    marginTop:-75
  },
  main: {
    width: 370,
    height: 270,
    // borderWidth: 1, borderColor: "red",
    elevation:10,
    marginHorizontal: 10,
    // marginTop: -90,
    backgroundColor: '#F4D5BD',
    marginVertical:90
  },
  secondbox: {
    width: 370,
    height: 320,
    // borderWidth: 1, borderColor: "red",,
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 60,
    marginTop: -95,
    backgroundColor: '#F4D5BD'
  },
  now: {
    marginVertical: 70,
    alignSelf: 'center',
    marginTop:-30
  },
  tap: {
    color: 'black',
    fontWeight: 'bold'
  },
  loction: {
    flexDirection: "row",
    alignSelf: 'center',
    marginTop: -60,
    marginLeft:10
  },
  send: {
    marginLeft: 10,
    fontSize: 21,
  },
  khanss: {
    flexDirection: 'row',

  },
  khan: {
    marginLeft: 20,
    marginVertical: 20,
    fontSize: 16
  },
  img: {
    marginLeft: 15,
    marginVertical: 20
  },
  save: {
    marginVertical: 30,
    marginHorizontal: 10,
  },
  txt: {
    color: "black",
    fontSize: 17
  },
  add: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15
  },
  home: {
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: 'black'
  },
  km: {
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: -15
  },
  number: {
    marginLeft: 60,
    marginVertical: 20

  },
  edit: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  share: {

    color: "red",
    fontSize: 15,
    fontWeight: 'bold'
  },
  dile: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold'
  },
  ed: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold'
  },
  line: {
    borderWidth: 1, color: "grey",
    marginHorizontal: 15
  },
  but: {
    alignSelf: "center",
    marginVertical: 50,
    borderWidth: 2, color: "red",
    width: 300,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10
  },
  new: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 20,
  }
})