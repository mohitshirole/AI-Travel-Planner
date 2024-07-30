import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword, getAuth  } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router=useRouter();

  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[fullName,setFullName]=useState();

  
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })

  }, []);

  const onCreateAccount=()=>{

    if(!email&&!password&&!fullName)
    {
      ToastAndroid.show('Please Enter all Details',ToastAndroid.LONG);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    // ..
  });
  }

  return (
    <View 
    style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />  
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
      }}>Create New Account</Text>

      {/* for user Full Name  */}
      <View style={{
        marginTop:50
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Full Name</Text>
        <TextInput 
        style={styles.input} 
         placeholder='Enter Full Name'
         onChangeText={(value)=>setFullName(value)}/>
      </View>
      

      {/* for email entry */}
      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Email</Text>
        <TextInput 
        style={styles.input} 
         placeholder='Enter  Email'
         onChangeText={(value)=>setEmail(value)}/>
      </View>


{/* for password entry */}
      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Password</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.input} 
         placeholder='Enter Password'
         onChangeText={(value)=>setPassword(value)}/>
      </View>

{/* Create Account button */}
<TouchableOpacity onPress={onCreateAccount} style={{
        padding:15,
        marginTop:30,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15

      }}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center',
          fontFamily:'outfit',
          
        }}>Create Account</Text>
      </TouchableOpacity>

      {/* For Sign in  button */}
      <TouchableOpacity 
        onPress={()=>router.replace('auth/sign-in')}
      
      style={{
        padding:15,
        marginTop:20,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        borderWidth:1

      }}>
        <Text style={{
          color:Colors.PRIMARY,
          textAlign:'center',
          fontFamily:'outfit',
          
        }}>Sign In</Text>
      </TouchableOpacity>      

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.GRAY,
    fontFamily:'outfit'
}
})