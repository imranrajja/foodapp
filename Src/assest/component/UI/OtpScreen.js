import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef,useState } from 'react'

const OtpScreen = () => {
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const [otp, setotp] = useState({
        firstInp: '',
        SecInp: '',
        ThirdInp: '',
        FourthInp: ''
    })

    return (
        <View>
            <View style={styles.mainBox}>
                <View style={styles.box}><TextInput style={styles.btntxt} maxLength={1} keyboardType='numeric' onChangeText={a => {
                    a && inp2.current.focus()
                    setotp({ firstInp: a })
                }} ref={inp1} /></View>
                <View style={styles.box}><TextInput style={styles.btntxt} maxLength={1} keyboardType='numeric' onChangeText={a => {
                    a ? inp3.current.focus() : inp1.current.focus()
                    setotp({ firstInp: otp.firstInp, SecInp: a })
                }} ref={inp2} /></View>
                <View style={styles.box}><TextInput style={styles.btntxt} maxLength={1} keyboardType='numeric' onChangeText={a => {
                    a ? inp4.current.focus() : inp2.current.focus()
                    setotp({ firstInp: otp.firstInp, SecInp: otp.SecInp, ThirdInp: a })
                }} ref={inp3} /></View>
                <View style={styles.box}><TextInput style={styles.btntxt} maxLength={1} keyboardType='numeric' onChangeText={a => {
                    !a && inp3.current.focus()
                    setotp({ firstInp: otp.firstInp, SecInp: otp.SecInp, ThirdInp: otp.ThirdInp, FourthInp: a })
                }} ref={inp4} /></View>

                

            </View>
            <Text>{otp.firstInp} {otp.SecInp} {otp.ThirdInp} {otp.FourthInp}</Text>
            {/* <Text>
                {otp.firstInp + ' ' + otp.SecInp + ' ' + otp.ThirdInp + ' ' + otp.FourthInp}
            </Text> */}
        </View>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    mainBox: {
        flexDirection: "row",
        width: "90%",
        // borderWidth:1,
        justifyContent: "space-around",
        alignSelf: "center",
        marginVertical: 20

    },
    box: {

        width: 60,
        height: 60,
        // borderWidth:1,
        backgroundColor: "pink",
        borderRadius: 10,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center"


    },
    btntxt: {
        fontSize: 30,
        fontWeight: "bold",
    }
})