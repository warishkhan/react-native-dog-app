import React,{useContext} from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import BreedContext from '../contexts/BreedContext';
const DogImagesScreen = ({ route }) => {
  const { breed, subBreedsImages } = route.params;
  const {  selectedBreed ,selectedSubBreed, mainBreed } = useContext(BreedContext);

  return (
    <View style={styles.imgContainer}>
      {selectedBreed.length > 0 ? <Text style={styles.textSubStyle}>Images of sub-breed's of {mainBreed} is {selectedSubBreed}</Text> : <Text style={styles.textStyle}>Images of {breed}</Text>}
      <FlatList
        data={subBreedsImages}
        numColumns={2}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.imgStyle}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer:{
    backgroundColor:"lightgray",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  textStyle:{
    fontSize:23,
    marginVertical:10,
    color:"#138781",
    textTransform:"uppercase",
    backgroundColor:"#fff",
    paddingVertical:10,
    borderRadius:5,
    elevation:5,
    width:"95%",
    textAlign:"center"
  },
  textSubStyle:{
    fontSize:13,
    marginVertical:10,
    color:"#138781",
    textTransform:"uppercase",
    backgroundColor:"#fff",
    paddingVertical:10,
    borderRadius:5,
    elevation:5,
    width:"95%",
    textAlign:"center"
  },
  imgStyle:{
    width:190,
    height:190,
    margin:5,
    borderRadius:5,
  }
})

export default DogImagesScreen;
