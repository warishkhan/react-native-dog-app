import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import BreedContext from '../contexts/BreedContext';

const DogBreedListScreen = () => {
  const {  setSelectedBreed, setMainBreed } = useContext(BreedContext);
  const navigation = useNavigation();
  const [breeds, setBreeds] = useState([]);
  const [subBreed, setSubBreed] = useState([]);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(({ data }) => {
        setSubBreed(data.message);
        setBreeds(Object.keys(data.message));
      })
      .catch(error => {
        console.error('Error fetching dog breeds:', error);
      });
  }, []);

  const handleBreedPress = (breed) => {
    setMainBreed(breed)
    const subBreeds = subBreed[breed] || []; // Access sub-breeds for the selected breed
    const subLength = subBreeds.length;
    setSelectedBreed(subBreeds)
  
    if (subLength) {
      navigation.navigate('SubBreeds', { breed, subBreeds });
    } else {
      axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => {
          const subBreedsImages = response.data.message;
          navigation.navigate('DogImages', { breed, subBreedsImages });
        })
        .catch(error => {
          console.error('Error fetching sub-breeds:', error);
        });
    }
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={breeds}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBreedPress(item)} style={styles.containerItem}>
            <Text style={styles.textStyle}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"lightgray",
  },
containerItem:{
  flex:1,
  marginVertical:8,
  paddingVertical:10,
  backgroundColor:"orange",
  elevation:5,
  marginHorizontal:5,
  borderRadius:5,
}
,textStyle:{
  color:"#fff",
  textAlign:"center",
  fontSize:20,
  textTransform:"uppercase",
}
})

export default DogBreedListScreen;
