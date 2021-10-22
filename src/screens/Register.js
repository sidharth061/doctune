import React, {useState} from "react";
import { View,Text,StyleSheet,TextInput, TouchableOpacity,ScrollView} from "react-native";
import { Auth } from "../services";
const Register=()=>{
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [passsword,setPassword]=useState()
    return(
        <View style={styles.rootview}>
            <View style={styles.contentview}>
                <Text style={styles.registerhead}>REGISTER</Text>
                <View style={styles.textinputview}>
                    <TextInput style={styles.textinput1} placeholder="Enter your name"
                    value={username}
                    onChangeText={e=>setUsername(e)}></TextInput>
                    <TextInput style={styles.textinput2} placeholder="Enter your email"
                    value={email}
                    onChangeText={e=>setEmail(e)}></TextInput>
                    <TextInput style={styles.textinput3} placeholder="Enter your passsword"
                    secureTextEntry
                    value={passsword}
                    onChangeText={e=>setPassword(e)}></TextInput>
                </View>
                <TouchableOpacity onPress={()=>Auth.signUp(username,email,passsword)}>
                    <View style={styles.registerbutton}>
                        <Text style={styles.registertext}>REGISTER</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Register;
const styles=StyleSheet.create({
    rootview:{
        flex:1,
        backgroundColor:'#40e693',
        paddingTop:'45%',
    },
    contentview:{
        height:650,
        width:'100%',
        paddingTop:'10%',
        backgroundColor:'#fff',
        borderTopStartRadius:40,
        borderTopRightRadius:40
    },
    registerhead:{
        color:'#40e693',
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:'4%'
    },
    textinputview:{
        paddingTop:'6%'
    },
    textinput1:{
        borderWidth:1,
        height:45,
        width:'80%',
        alignSelf:'center',
        borderRadius:5,
        color:'#40e693',
        borderColor:'#40e693'
    },
    textinput2:{
        borderWidth:1,
        height:45,
        width:'80%',
        alignSelf:'center',
        borderRadius:5,
        color:'#40e693',
        borderColor:'#40e693',
        marginTop:'5%'
    },
    textinput3:{
        borderWidth:1,
        height:45,
        width:'80%',
        alignSelf:'center',
        borderRadius:5,
        color:'#40e693',
        borderColor:'#40e693',
        marginTop:'5%'
    },
    registerbutton:{
        height:45,
        width:'80%',
        backgroundColor:'#40e693',
        alignSelf:'center',
        marginTop:'5%',
        borderRadius:20
    },
    registertext:{
        color:'#fff',
        fontSize:20,
        alignSelf:'center',
        marginTop:'2.8%',
        fontWeight:'700'
    },
    register:{
        alignSelf:'center',
        marginTop:'4%'
    },

});