import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
import React, { useState } from 'react'


const Register = () => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState({
        Name:"",
        Password:""
    })
    const validition= ()=>{
        seterror({
            Name: name? "" :"inviled name",
            Password:password? "" : "inviled password"
        }
        )
        
    }
    return (
        <View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.rigester}>Register</Text>
            </View>

            <View >
                <View style={styles.input}>
                    <TextInput placeholder='Enter the name ' onChangeText={setname} />
                </View>
                <Text style={styles.errtxt}>{error.Name}</Text>
                <View style={styles.input}>
                    <TextInput placeholder='password ' onChangeText={setpassword} secureTextEntry={true} />
                </View>
                <Text  style={styles.errtxt}>{error.Password}</Text>

            </View>
            <TouchableOpacity onPress={()=>validition()} style={styles.nextview}>
                <Text style={styles.next}>NEXT</Text>
            </TouchableOpacity>



        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    rigester: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",

    },
    input: {
        borderWidth: 2,
        borderColor: "black",
        marginHorizontal: 10,
        margin: 10
    },
    nextview: {
        borderWidth: 2, borderColor: "black",
        height: 50,
        backgroundColor: "black",
        marginHorizontal: 10,
        margin: 10,
        alignItems: "center"
    },
    next: {
        color: "white",
        top: 10,
        fontSize: 20,

    },
    errtxt:{
        color:"red",
        marginHorizontal:20
    }
})