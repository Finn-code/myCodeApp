import React from 'react';
import { FlatList, View, Text } from 'react-native';

const HorizontalList = ({ data }) => {
  const renderItem = ({ item }) => {
    <View>
      <Text>{item.title}</Text>
    </View>
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );
};

export default HorizontalList;
