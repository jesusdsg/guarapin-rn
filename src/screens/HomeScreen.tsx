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
import {Card} from '../components/Card';

export const HomeScreen = () => {
  const {loading, error, data} = useQuery(GET_CHARACTERS, {
    variables: {page: 1},
  });

  if (loading) return <ActivityIndicator size="large" color="#00ff00" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/title.png')}
        alt="Title"
        style={styles.title}
        resizeMode="contain"
      />
      <FlatList
        data={data.characters.results}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card character={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default HomeScreen;
