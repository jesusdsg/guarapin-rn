import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../constants/colors';
import {Character} from '../types/Character';

interface CardProps {
  character: Character;
  onPress: (character: Character) => void;
}

export const Card: React.FC<CardProps> = ({character, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(character)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: character.image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.species}>{character.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
    shadowColor: '#d3d3d3',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    marginBottom: 30,
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    maxHeight: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  name: {fontSize: 18, fontWeight: 'bold', marginTop: 10, textAlign: 'left'},
  species: {fontSize: 16, color: 'gray'},
});
