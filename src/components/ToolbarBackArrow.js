import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import global_style from '../components/GlobalStyle';
import Theme from "../components/Theme";
import Images from "../constant/Images";


const ToolbarBackArrow = ({ onPress, param_title }) => {

  return (
    <View style={[global_style.toolbarMain, { backgroundColor: Theme.color_primary }]}>

      <Pressable
        onPress={onPress}
        hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} >

        <Image
          source={Images.fab}
          style={{ width: 20, height: 20, }} />

      </Pressable>

      <Text style={{
        fontFamily: "HKGrotesk-Medium", fontSize: 16,
        color: Theme.color_black,
      }}>
        {param_title}
      </Text>

      <View>

      </View>

    </View>
  );
};

export default ToolbarBackArrow;

const styles = StyleSheet.create({


  textTitle: {
    fontFamily: "HKGrotesk-Medium",
    fontSize: 17,
    color: Theme.color_white,
  },

});
