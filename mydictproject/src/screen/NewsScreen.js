import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity,FlatList,Image } from 'react-native';
import {NewsCard} from './NewsCard';
import { data} from './data';
import {
    getTheme
  } from 'react-native-material-kit';
const NewsScreen=()=>{
    const theme = getTheme();
    const renderNews=({item})=><NewsCard data={item}/>;
   
    return(
        <>
            <FlatList
            data={data}
            renderItem={renderNews}
            // keyExtractor={item => item.id}
            ListHeaderComponent={() => <Text style={styles.header}>News</Text>}
          
            ListHeaderComponentStyle={{margin:25}}
            />     
        </> 

    )
    
}
const styles = StyleSheet.create({
    header: {fontSize: 35, padding: 5, fontWeight: 'bold'},
  });

export default NewsScreen;