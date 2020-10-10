import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
const NewsCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: data.imageUrl}} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('window').width * 0.9,
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  desc: {
    fontSize: 16,
  },
});

export {NewsCard};
