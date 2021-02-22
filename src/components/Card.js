import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Theme from './Theme';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;


const Card = ({ title, moviesData }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.card}>

      <Text style={styles.cardTitle}>{title}</Text>

      <FlatList
        data={moviesData}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>

          <Pressable
            onPress={() => navigation.navigate('MovieDetails', {
              movie_id: item.id
            })}>

            <View style={styles.cardImgWrapper}>

              <Image
                source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path, borderRadius: 10 }}
                style={{ height: deviceHeight / 3.5, resizeMode: 'center' }} />
            </View>

          </Pressable>

        } />

    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: deviceHeight / 3.5,
    width: deviceWidth
  },
  cardImgWrapper: {
    width: deviceWidth / 3,
    marginTop: -5
  },

  cardTitle: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 18,
    marginTop: 3,
    marginHorizontal: 10,
    color: Theme.color_white
  },

});
