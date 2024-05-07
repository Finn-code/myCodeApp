import React from 'react';
import { FlatList, View, StyleSheet, Image,TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  id: string;
  icon: any;
  name: string;
  screen: string;
}

interface Props {
  data: Item[];
  onPress: (screen: string) => void;
}


const HorizontalList: React.FC<Props> = ({ data, onPress }) => {
  const renderItem = ({ item} : {item: Item} )=> {
    return (
      <View>
        <TouchableOpacity onPress={() => onPress(item.screen)}>
        <View style={styles.itemContainer}>
          <Image source={item.icon} style={styles.icon} />
          </View>
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.name}</Text>
      </View>
    
    );
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

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  icon: {
    width: 50,
    height: 50,
  },
  itemText: {
    fontSize: 18,
    alignSelf: 'center',
  }
});

export default HorizontalList;
