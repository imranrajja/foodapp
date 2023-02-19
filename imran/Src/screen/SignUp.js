import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const SignUp = () => {
  const [count, setcount] = useState(0)
  const[sub,setsub]=useState(0)
  const font=()=>{
    if(count<5){
      setcount(count+1)
    }
    if(sub<0 && sub>10){
      setsub(sub -1)
    }
  }
  return (
    <View>
      <View>
        <Button title='+ count'onPress={()=>font()}/>
      </View>
      <View>
        <Text style={{fontSize:50}}>{count}</Text>
      </View>
      <Button title='- count' onPress={()=>font()}/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})