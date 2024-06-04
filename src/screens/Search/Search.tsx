import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import BackButton from '../functions/backbutton';
import { useNavigation } from '@react-navigation/native';
import { PersonReceived } from '../../lib/Data/dummyData';

const Search = ({}) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleSearch = () => {
    const filteredResults = PersonReceived.filter(person => {
      const nameMatches = person.name.toLowerCase().includes(searchQuery.toLowerCase());
      const addressMatches = person.address.toLowerCase().includes(searchQuery.toLowerCase());
      const bantuanMatches = person.bantuan.toLowerCase().includes(searchQuery.toLowerCase());
      const numberMatches = person.number.toLowerCase().includes(searchQuery.toLowerCase());
      return nameMatches || addressMatches || bantuanMatches || numberMatches; 
    });
    setSearchResults(filteredResults.slice(0, 7)); // Display only the first 7 results initially
  };

  const handleLoadMore = () => {
    // Simulate loading more data with a delay (you can fetch more data from a server here)
    setLoadingMore(true);
    setTimeout(() => {
      setSearchResults(prevResults => {
        const startIndex = prevResults.length; // Get the index from where to start loading more results
        const nextResults = PersonReceived.slice(startIndex, startIndex + 7); // Load the next 7 results
        return [...prevResults, ...nextResults];
      });
      setLoadingMore(false);
    }, 1000); // Adjust the delay as needed
  };

  const handleResultPress = (userId) => {
    navigation.navigate('DummyProfile', { userId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <BackButton/>
          <Text style={styles.title}>Search</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <TextInput
          style={styles.searchBar}
          placeholder='Search...'
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <FlatList
          style={{marginBottom: 50, paddingBottom: 50,}}
          data={searchResults}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.resultContainer} onPress={() => handleResultPress(item.id)}>
              <Text style={styles.resultTextName}>{item.name}</Text>
              <Text style={styles.resultTextNumber}>{item.number}</Text>
              <Text style={styles.resultText}>{item.address}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => (
            loadingMore && <ActivityIndicator size="large" color="#0000ff" />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 1,
    justifyContent: 'center', // Center items vertically
    backgroundColor: 'pink',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
  },
  bottomSection: {
    flex: 6,
    backgroundColor: 'white',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  resultContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  resultTextName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple'
  },
  resultTextNumber: {
    fontSize: 16,
  },
  resultTextAdd: {
    fontSize: 12
  }
});

export default Search;
