import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {GET_CHARACTERS} from '../graphql/queries';
import {Card} from '../components/Card';
import {Button} from '../components/Button';
import SearchIcon from '../components/icons/SearchIcon';

export const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const {loading, error, data, refetch, fetchMore} = useQuery(GET_CHARACTERS, {
    variables: {page: 1},
  });

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setPage(1);
      refetch({name: search, page: 1});
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const loadMore = () => {
    if (data?.characters?.info?.next) {
      fetchMore({
        variables: {page: page + 1, name: search},
        updateQuery: (prevResult, {fetchMoreResult}) => {
          if (!fetchMoreResult) return prevResult;
          return {
            characters: {
              ...fetchMoreResult.characters,
              results: [
                ...prevResult.characters.results,
                ...fetchMoreResult.characters.results,
              ],
            },
          };
        },
      });
      setPage(page + 1);
    }
  };

  if (loading && page === 1)
    return <ActivityIndicator size="large" color="#00ff00" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const handleSearch = (text: string) => {
    setSearch(text);
    refetch({name: text, page: 1});
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/title.png')}
        alt="Title"
        style={styles.title}
        resizeMode="contain"
      />

      {/* Adding the filter :D */}
      <View
        style={{
          position: 'relative',
        }}>
        <TextInput
          style={styles.input}
          placeholder="Search character..."
          placeholderTextColor={'#c1c1c1'}
          onChangeText={handleSearch}
          value={search}
        />
      </View>

      <FlatList
        data={data.characters.results || []}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card character={item} />}
      />

      <Button title="Load more..." onPress={() => loadMore()} />
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
  input: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: '#494949',
    borderRadius: 10,
    marginVertical: 10,
    color: '#000',
  },
});

export default HomeScreen;
