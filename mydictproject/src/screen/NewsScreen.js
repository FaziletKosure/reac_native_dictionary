import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity,FlatList } from 'react-native';
import NewsCard from './NewsCard'
import data from './data';
import {
    getTheme,
    ...
  } from 'react-native-material-kit';
const NewsScreen=()=>{
    const theme = getTheme();
    const renderNews=({item})=><NewsCard data={item}/>
    return(
        <View>
            <FlatList
            data={data}
            renderItem={renderNews}
            ListHeaderComponent={()=><Text {theme.cardTitleStyle}></Text>}
            />

           
           
        </View>

    )
    
}

export default NewsScreen;