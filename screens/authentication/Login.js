import React,{useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, SafeAreaView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Login = ({navigation}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Route")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {

    if(email.length > 0 && password.length > 0 ){
    auth.signInWithEmailAndPassword(email.trim(), password.trim()).then(userCredentials => {
      const user = userCredentials.user
      AsyncStorage.setItem("user", user)
      navigation.replace("Route")
     }).catch(error => alert(error.message))
    }else {
      alert("Please enter all data")
    }
  }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex: 1}}
    // keyboardShouldPersistTaps={'always'}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image}/>
      <View style={{marginTop: 15}}>
        <TextInput 
        mode='outlined'
        outlineColor='#CBCAC9'
        placeholder='Enter your email' 
        value={email}
        onChangeText={email => setEmail(email)}
        style={styles.input}/>
         <TextInput 
        mode='outlined'
        outlineColor='#CBCAC9'
        placeholder='Enter password' 
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.input}/>
      </View>
      <Button mode="contained" 
      style={styles.button}
      onPress={handleLogin}
      >
    <Text style={styles.buttonText}>Login</Text>
  </Button>
  <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
      <Text style={styles.remember}>Don't have an account?</Text>
      <Text style={styles.forgot} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
    </View>
    </View>
    </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
   width: Dimensions.get('screen').width,
   height: Dimensions.get('screen').height,
  },
  image: {
   marginTop: 60,
   resizeMode: 'cover',
   height: 300,
   width: 300,
   alignSelf: 'center'
  },
  input: {
   backgroundColor: '#fff',
   borderRadius: 20,
   marginTop: 10,
   width: '90%',
   alignSelf: 'center'
  },
  button: {
   width: '90%',
   padding: 8,
   backgroundColor: '#F9BE36',
   borderRadius: 16,
   marginTop: 50,
   alignSelf: 'center',
  },
  buttonText: {
   fontSize: 19,
   alignSelf: 'center',
   textAlign: 'center'
  },
  remember: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    color: '#393A4A',
    textAlign: 'left'
  },
  forgot: {
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
    color: '#56B760',
    marginRight: 20,
  },
})

 