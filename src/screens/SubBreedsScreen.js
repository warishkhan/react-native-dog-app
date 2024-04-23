import React,{useContext} from 'react';
import BreedContext from '../contexts/BreedContext';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SubBreedsScreen = ({ route }) => {
  const { breed, subBreeds } = route.params;
  const { setSelectedSubBreed } = useContext(BreedContext);
  const navigation = useNavigation();

  const handleSubBreedPress = (subBreed) => {
    setSelectedSubBreed(subBreed)
    axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`)
      .then(response => {
        const images = response.data.message;
        // Implement navigation to images page for the selected sub-breed with images
        navigation.navigate('DogImages', { breed: subBreed, subBreedsImages: images });
      })
      .catch(error => {
        console.error('Error fetching images for sub-breed:', error);
      });
  };

  return (
    <View style={styles.imgContainer}>
      <Text style={styles.textStyle}>Sub-breeds for {breed}</Text>
      <FlatList
        data={subBreeds}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSubBreedPress(item)} style={styles.containerItem}>
            <Text style={styles.textStyleSub}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}>
        <Text style={styles.btnText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer:{
    backgroundColor:"lightgray",
  },
  textStyle:{
    fontSize:23,
    color:"#138781",
    textTransform:"uppercase",
    backgroundColor:"#fff",
    paddingVertical:10,
    borderRadius:5,
    elevation:5,
    width:"95%",
    textAlign:"center",
    margin:10
  },
  containerItem:{
    marginVertical:8,
    paddingVertical:10,
    backgroundColor:"orange",
    elevation:5,
    marginHorizontal:5,
    borderRadius:5,
  }
  ,textStyleSub:{
    color:"#fff",
    textAlign:"center",
    fontSize:20,
    textTransform:"uppercase",
  },
  btn:{marginVertical:8,
    paddingVertical:10,
    backgroundColor:"#000",
    elevation:5,
    marginHorizontal:5,
    borderRadius:5,
  },
    btnText:{
    color:"#fff",
    textAlign:"center",
    fontSize:20,
    textTransform:"uppercase",
    }
})

export default SubBreedsScreen;
