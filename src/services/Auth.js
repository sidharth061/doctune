import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
const signUp=(fullname,email,password)=>{
    if(!fullname || !email || !password){
        Alert.alert('Please enter all fields')
    }
    return auth().createUserWithEmailAndPassword(email,password)
    .then( cred=>{
        const {uid}=cred.user;
        auth().currentUser.updateProfile(
            {
                displayName: fullname
            })
            return uid
        
    })
    .catch(
        error=>Alert.alert(error.code,error.message)
    )
}
const signIn=(email,password)=>{
    if(!email || !password){
        Alert.alert('error','please enter')
    }
    return auth().signInWithEmailAndPassword(email,password)
    .then(()=>{})
    .catch(
        error=>Alert.alert('Incurrect Email/Password')
    )
}
const signOut=()=>{
    return auth().signOut()
    .then(() => console.log('User signed out!'));
}
const Auth={
    signUp,
    signIn,
    signOut
}
export default Auth;