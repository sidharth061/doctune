import React,{useState} from "react";
import { View,Text,StyleSheet,TextInput, TouchableOpacity,ScrollView} from "react-native";
import { Auth } from "../services";
export default Login=({navigation})=>{
    const [email,setEmail]=useState()
    const [passsword,setPassword]=useState()
    return(
        <View style={styles.rootview}>
            <View style={styles.contentview}>
                <Text style={styles.loginhead}>LOGIN</Text>
                <View style={styles.textinputview}>
                    <TextInput style={styles.textinput1} placeholder="Enter your email"
                    value={email}
                    onChangeText={e=>setEmail(e)}></TextInput>
                    <TextInput style={styles.textinput2} placeholder="Enter your password"
                    secureTextEntry
                    value={passsword}
                    onChangeText={e=>setPassword(e)}></TextInput>
                </View>
                <TouchableOpacity
                onPress={()=>Auth.signIn(email,passsword)}>
                    <View style={styles.loginbutton}>
                        <Text style={styles.logintext}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register}
                onPress={()=> navigation.navigate('Register')}>
                    <Text style={styles.registertext}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
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
    loginhead:{
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
    loginbutton:{
        height:45,
        width:'80%',
        backgroundColor:'#40e693',
        alignSelf:'center',
        marginTop:'5%',
        borderRadius:20
    },
    logintext:{
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
    registertext:{
        color:'black'
    },
    

});