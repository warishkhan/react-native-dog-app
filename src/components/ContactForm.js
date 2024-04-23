import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDOB = () => {
    // Regular expression for the format dd/mm/yyyy
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
  
    // Check if the DOB matches the regex pattern
    return dob.trim().match(dobRegex) !== null;
  };
  

  const validatePassword = () => {
    return password.trim().length >= 6;
  };

  const handleSubmit = () => {
    let errorMessage = '';

    if (!validateEmail()) {
      errorMessage = 'Please enter a valid email address';
    } else if (!validateDOB()) {
      errorMessage = 'Please enter valid date of birth';
    } else if (!validatePassword()) {
      errorMessage = 'Password must be at least 6 characters long';
    }

    if (errorMessage) {
      Alert.alert('Error', errorMessage);
    } else {
      submitForm();
    }
  };

  const submitForm = () => {
    // Here you can send the form data to your backend or perform any other action
    Alert.alert('Success', 'Form submitted successfully');
    setEmail('');
    setDOB("");
    setPassword("")
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Date of Birth formate: dd/mm/yyyy"
        value={dob}
        onChangeText={setDOB}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputStyle}
      />
      
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
formContainer:{
  justifyContent:"center",
  alignItems:"center"
},
inputStyle:{
  width:"100%",
  backgroundColor:"#fff",
  paddingVertical:10,
  marginVertical:5,
  elevation:5,
  paddingLeft:10
},
btn:{
  marginVertical:8,
  paddingVertical:10,
  backgroundColor:"#000",
  elevation:5,
  marginHorizontal:5,
  width:"100%"
},
  btnText:{
  color:"#fff",
  textAlign:"center",
  fontSize:20,
  textTransform:"uppercase",
  }
})

export default ContactForm;
