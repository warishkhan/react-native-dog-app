import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactForm from '../components/ContactForm';

const ContactScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Contact Form</Text>
      <ContactForm/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"lightgray",
  },
textStyle:{
  color:"#fff",
  textAlign:"center",
  fontSize:20,
  textTransform:"uppercase",
  backgroundColor:"orange",
  paddingVertical:10,
  marginTop:10,
  marginBottom:5
}
})

export default ContactScreen;
