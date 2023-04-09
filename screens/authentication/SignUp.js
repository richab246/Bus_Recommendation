import React, {useState, useEffect} from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, Dimensions, StatusBar} from 'react-native';
import { Button, TextInput, Checkbox } from 'react-native-paper';
import {auth} from '../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default SignUp = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Route")
      }
    })

    return unsubscribe
  }, [])

  
  const handleLogin = async () => {
    
    if(email.length > 0 && password.length > 0 && name.length> 0 && checked==true){
    await auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
      const user = userCredentials.user
      AsyncStorage.setItem("user", user)
      navigation.replace("Route")
    }).catch(error => alert(error.message))
    }else{
      alert("Please enter all data")
    }
 
   }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex: 1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.body}>
        <StatusBar backgroundColor='white'/>
    <Text style={styles.signIn}>Create New Account</Text>
    <TextInput 
        mode='outlined'
        outlineColor='#CBCAC9'
        placeholder='Name' 
        value={name}
        onChangeText={name => setName(name)}
        style={styles.input}/>
    <TextInput 
        mode='outlined'
        outlineColor='#CBCAC9'
        placeholder='Email' 
        value={email}
        onChangeText={email => setEmail(email)}
        style={styles.input}/>
    <TextInput 
        mode='outlined'
        outlineColor='#CBCAC9'
        placeholder='Password' 
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.input}/>
    <View style={styles.checkbox}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={styles.remember}>I agree with</Text>
      <Text style={styles.forgot}>Terms & Conditions</Text>
    </View>
      <Button mode="contained" 
      style={styles.button}
      onPress={handleLogin}
      >
    <Text style={styles.buttonText}>Create Account</Text>
  </Button>
    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
      <Text style={styles.remember}>Already have an account</Text>
      <Text style={styles.forgot} onPress={() => navigation.navigate('Login')}> Sign In</Text>
    </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#fff',
   flex: 1,
   width: Dimensions.get('screen').width,
   height: Dimensions.get('screen').height,
   position: 'absolute',
  },
  signIn: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    width: '90%',
    color: '#404153',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center'
  },
  checkbox: {
    flexDirection: 'row',
    marginLeft: 25,
    alignItems: 'center',
    width: '100%', 
    marginTop: 9,
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
    marginLeft: 5
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
})