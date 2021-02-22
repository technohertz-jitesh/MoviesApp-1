import NetInfo from "@react-native-community/netinfo";
import { Spinner } from 'native-base';
import React, { useEffect } from 'react';
import {
  Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View
} from 'react-native';
import Modal from "react-native-modal";
import global_style from '../components/GlobalStyle';
import StatusBarComponent from '../components/StatusBarComponent';
import Theme from "../components/Theme";
import APIClient from "../constant/APIClient";
import Images from "../constant/Images";
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;


const MovieDetails = ({ route, props }) => {

  const { movie_id } = route.params;

  const [title, setTitle] = React.useState([]);
  const [coverImage, setCoverImage] = React.useState([]);
  const [posterImage, setPosterImage] = React.useState([]);
  const [overview, setOverview] = React.useState([]);
  const [language, setLangauge] = React.useState([]);
  const [popularity, setPopularity] = React.useState([]);
  const [release, setrelease] = React.useState([]);
  const [revenue, setrevenue] = React.useState([]);


  const [progressBar, setProgressBar] = React.useState(false);
  const [connectionStatus, setConnectionStatus] = React.useState(true);


  useEffect(() => {

    //To get the network state once
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setConnectionStatus(true)
      } else {
        setConnectionStatus(false)
      }
    });

    loadMoviesDetails();

    console.log('movie_id',movie_id)

  }, [])


  const loadMoviesDetails = () => {

    if (connectionStatus) {

      setProgressBar(true)

      APIClient.getMoviesDetails(movie_id)
        .then((response) => {

          //set data
          setCoverImage(response.backdrop_path)
          setPosterImage(response.poster_path)
          setTitle(response.title)
          setOverview(response.overview)
          setLangauge(response.original_language)
          setPopularity(response.popularity)
          setrelease(response.release_date)
          setrevenue(response.revenue)

        })
        .catch((error) => {
          console.log('catch error : ', error)
        })
        .finally(() => setProgressBar(false));
    }

  }


  return (
    <SafeAreaView style={[global_style.Container]}>

      <ScrollView style={[global_style.Container]}>

        <StatusBarComponent global_navigation={props} />

        {/* For loading spinner */}
        <Modal
          isVisible={progressBar}>
          <Spinner color={Theme.color_primary} style={{ height: 50 }} />
        </Modal>

        <Text style={styles.cardHeaderTitle}>{title}</Text>

        <Image
          source={coverImage == null ?
            Images.no_Image
            : { uri: "https://image.tmdb.org/t/p/w500" + coverImage }
          }
          style={{ width: deviceWidth, height: deviceHeight / 3, resizeMode: 'stretch' }} />


        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>

          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + posterImage,
            }}
            style={{ height: 230, resizeMode: 'cover', marginVertical: 10, marginRight: 5, width: '35%' }} />

          <View style={{ width: '65%', marginTop: 10, justifyContent: 'space-evenly' }}>

            <Text style={styles.cardTitle}>{"Langauge : "}{language}</Text>
            <Text style={styles.cardTitle}>{"Popularity : "}{popularity}</Text>
            <Text style={styles.cardTitle}>{"Release Date : "}{release}</Text>
            <Text style={styles.cardTitle}>{"Revenue : "}{revenue}</Text>

          </View>

        </View>

        <Text style={styles.cardOverviewTitle}>{"Overview"}</Text>
        <Text style={styles.cardTitle}>{overview}</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  card: {
    height: deviceHeight / 3.5,
    width: deviceWidth
  },
  cardImgWrapper: {
    width: deviceWidth / 3,
  },

  cardHeaderTitle: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    color: Theme.color_white,
    textAlign: 'center'
  },

  cardTitle: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 18,
    marginTop: 5,
    marginHorizontal: 10,
    color: Theme.color_white
  },

  cardOverviewTitle: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
    color: Theme.color_white
  },

});