import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
// import {
//     getTheme
//   } from 'react-native-material-kit';

const NewsCard = ({data}) => {
    // const theme = getTheme();
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source={{uri: data.imageUrl}}/>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
   container:{
    flex: 1,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
   } ,
   image: {
    height: Dimensions.get('window').width * 0.45,
    borderRadius: 5
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 3,
    fontSize: 16
},
desc:{
    fontSize: 12
}
})

export { NewsCard};
