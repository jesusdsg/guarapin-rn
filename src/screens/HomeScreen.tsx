import {useQuery} from '@apollo/client';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GET_CHARACTERS} from '../graphql/queries';

export const HomeScreen = () => {
  const {loading, error, data} = useQuery(GET_CHARACTERS, {
    variables: {page: 1}, // Puedes cambiar la página
  });

  if (loading) return <ActivityIndicator size="large" color="#00ff00" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.characters.results}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.species}>{item.species}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#f5f5f5'},
  card: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  image: {width: 150, height: 150, borderRadius: 10},
  name: {fontSize: 18, fontWeight: 'bold', marginTop: 10},
  species: {fontSize: 16, color: 'gray'},
});

export default HomeScreen;
