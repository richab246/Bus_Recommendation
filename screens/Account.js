import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Divider, List } from 'react-native-paper';
import { auth } from '../firebase';

export default function Account({navigation}) {

  const handleSignOut = () => {
    auth.signOut().then(() => {
      AsyncStorage.setItem("user", null)
      navigation.replace("Login")
    }).catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.heading}>Account</Text>
      </View>
      <View>
        <List.Item title='Your Account'/>
        <Divider style={styles.divide}/>
        <List.Item title='Language'/>
        <Divider style={styles.divide}/>
        <List.Item title='Feedback'/>
        <Divider style={styles.divide}/>
        <List.Item title='Help'/>
        <Divider style={styles.divide}/>
        <List.Item title='About Us'/>
        <Divider style={styles.divide}/>
        <List.Item title='Logout' onPress={handleSignOut}/>
        <Divider style={styles.divide}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  head: {
   backgroundColor: '#eec41b',
   justifyContent: 'center',
   padding: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  divide: {
    backgroundColor: '#868985',
    width: '95%',
    alignSelf: 'center'
    }
})