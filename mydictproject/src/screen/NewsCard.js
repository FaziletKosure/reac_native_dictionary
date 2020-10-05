import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import {
    getTheme
  } from 'react-native-material-kit';

const NewsCard = ({data}) => {
    const theme = getTheme();
    return (
        <View>
            <Image style={theme.cardImageStyle}  source={{uri: data.imageUrl}}/>
            <Text style={theme.cardTitleStyle}>{data.title}</Text>
            <Text style={theme.cardContentStyle}>{data.description}</Text>
            <Text>Fazilet</Text>
        </View>
    )
}

export { NewsCard};
