import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {NewsCard} from './NewsCard';
import {data} from './data';
const banner_data = [
  {
    id: 0,
    text: 'Best Prime Day 2020 Alexa',
    imageUrl:
      'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
  },
  {
    id: 1,
    text: 'Stocks After Amazon',
    imageUrl:
      'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
  },
  {
    id: 2,
    text: "Levi's Most Popular Jeans",
    imageUrl:
      'https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5',
  },
  {
    id: 3,
    text: 'Social Security Benefits?',
    imageUrl:
      'https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg',
  },
  {
    id: 4,
    text: 'Columbus Day and Veterans Day',
    imageUrl: 'https://images.mktw.net/im-242755/social',
  },
];

const NewsScreen = () => {
  const listHeader = () => {
    return (
      <>
        <Text style={{fontWeight: 'bold', fontSize: 50, margin: 10}}>News</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {banner_data.map((banner_item) => {
            return (
              <ImageBackground
                source={{uri: banner_item.imageUrl}}
                style={{
                  width: Dimensions.get('window').width * 0.9,
                  height: Dimensions.get('window').height / 4,
                  margin: 5,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: 130,
                    alignSelf: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(100,100,100, 0.8)',
                    width: Dimensions.get('window').width / 1.5,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    padding: 5,
                  }}>
                  {banner_item.text}
                </Text>
              </ImageBackground>
            );
          })}
        </ScrollView>
      </>
    );
  };
  return (
    <>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={data}
        renderItem={({item}) => <NewsCard data={item} />}
        ListHeaderComponent={() => <Text style={styles.header}>News</Text>}
        ListHeaderComponent={listHeader}
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
