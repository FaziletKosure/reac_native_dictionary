import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import {
    getTheme,
    ...
  } from 'react-native-material-kit';

const NewsCard = ({data}) => {
    const theme = getTheme();
    return (
        <View>
            <Image  source={{uri : base64Icon}}style={theme.cardImageStyle}/>
            <Text   style={theme.cardActionStyle}></Text>
            <Text  style={theme.cardContentStyle}></Text>
        </View>
    )
}

export default NewsCard;
