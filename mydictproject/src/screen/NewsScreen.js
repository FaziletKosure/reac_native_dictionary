import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {NewsCard} from './NewsCard';
import {data} from './data';

const NewsScreen = () => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => <NewsCard data={item} />}
        ListHeaderComponent={() => <Text style={styles.header}>News</Text>}
        ListHeaderComponentStyle={{margin: 25}}
      />
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    padding: 5,
    fontWeight: 'bold',
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default NewsScreen;
