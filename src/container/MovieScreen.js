import NetInfo from "@react-native-community/netinfo";
import { Spinner } from 'native-base';
import React, { useEffect } from 'react';
import { Dimensions, FlatList, SafeAreaView, View } from 'react-native';
import Modal from "react-native-modal";
import Card from "../components/Card";
import global_style from '../components/GlobalStyle';
import StatusBarComponent from '../components/StatusBarComponent';
import Theme from "../components/Theme";
import APIClient from "../constant/APIClient";
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;


const MovieScreen = (props) => {

  const [data, setData] = React.useState([]);
  const [progressBar, setProgressBar] = React.useState(false);
  const [connectionStatus, setConnectionStatus] = React.useState(true);
  const forceUpdate = React.useReducer(bool => !bool)[1];


  useEffect(() => {

    //To get the network state once
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setConnectionStatus(true)
      } else {
        setConnectionStatus(false)
      }
    });

    loadGenresAPI();

  }, [])


  const loadGenresAPI = () => {

    if (connectionStatus) {

      setProgressBar(true)

      APIClient.getListGenres()
        .then((response) => {

          if (response.genres.length > 0) {

            //get response
            var getGenresArray = response.genres;
            let tempCategoryArray = [];

            //for loop for getting data to movie list
            for (let i = 0; i < getGenresArray.length; i++) {

              //api call for getting movie from genres id
              APIClient.getListMovies(getGenresArray[i].id)
                .then((response) => {

                  var jsonCategory = {
                    gener_id: getGenresArray[i].id,
                    gener_name: getGenresArray[i].name,
                    gener_data: response.results,
                  }

                  tempCategoryArray.push(jsonCategory);
                  forceUpdate();
                })
                .catch((error) => {
                  console.log('catch error : ', error)
                })
                .finally(() => setProgressBar(false));
            }

            //set final array to data
            setData(tempCategoryArray)
          }

        })
        .catch((error) => {
          console.log('catch error : ', error)
        })
        .finally(() => setProgressBar(false));
    }

  }


  return (
    <SafeAreaView style={[global_style.Container]}>

      <View style={[global_style.Container]}>

        <StatusBarComponent global_navigation={props} />

        {/* For loading spinner */}
        <Modal
          isVisible={progressBar}>
          <Spinner color={Theme.color_primary} style={{ height: 50 }} />
        </Modal>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) =>
  
            <Card
              props={props}
              moviesData={item.gener_data}
              title={item.gener_name}
            />

          } />

      </View>

    </SafeAreaView>
  );
}

export default MovieScreen;