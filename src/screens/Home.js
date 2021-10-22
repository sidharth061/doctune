import React from "react";
import { View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { Auth } from "../services";
const Home=({navigation})=>{
    return(
        <View style={styles.rootview}>
            <View>
                <Text style={styles.welcome}>Welcome</Text>
                <TouchableOpacity style={styles.logout}
                onPress={()=>Auth.signOut()}>
                    <Text style={styles.logouttext}>LOGOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.location}
                onPress={()=>navigation.navigate('Maps')}>
                    <Text style={styles.locationtext}>LOCATION</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Home;
const styles=StyleSheet.create({
    rootview:{
        flex:1
    },
    welcome:{
        color:'black',
        fontSize:27,
        fontWeight:'700',
        alignSelf:'center',
        marginTop:'60%'
    },
    logout:{
        height:45,
        width:'50%',
        backgroundColor:'#40e693',
        alignSelf:'center',
        marginTop:'7%',
        borderRadius:5
    },
    logouttext:{
        color:'#fff',
        fontSize:20,
        alignSelf:'center',
        marginTop:'3.7%',
        fontWeight:'700',
        
    },
    location:{
        height:45,
        width:'50%',
        backgroundColor:'#40e693',
        alignSelf:'center',
        marginTop:'7%',
        borderRadius:5
    },
    locationtext:{
        color:'#fff',
        fontSize:20,
        alignSelf:'center',
        marginTop:'3.7%',
        fontWeight:'700',
    }

})
