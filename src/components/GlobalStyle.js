import { Dimensions, Platform, StyleSheet } from "react-native";
import Theme from '../components/Theme';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: Theme.color_black
  },

  Center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.color_white
  },

  TxtCenter: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  toolbarMain: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.color_white,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        shadowColor: '#0000000D',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 6,
      }
    })
  },

  
  fab_style: {
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignSelf: 'flex-end'
  },
 
  /////////////////fonts //////////////

  bold14: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 14,
  },
  bold16: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 16,
  },
  bold18: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 18,
  },

  bold20: {
    fontFamily: "HKGrotesk-Bold",
    fontSize: 20,
    color: Theme.color_white,
  },

  bold22: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Bold",
    fontSize: 22,
  },

  light14: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Light",
    fontSize: 14,
  },
  light16: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Light",
    fontSize: 16,
  },
  light18: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Light",
    fontSize: 18,
  },
  light20: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Light",
    fontSize: 20,
  },

  medium14: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Medium",
    fontSize: 14,
  },
  medium16: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Medium",
    fontSize: 16,
  },
  medium18: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Medium",
    fontSize: 18,
  },
  medium20: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Medium",
    fontSize: 20,
  },

  regular14: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Regular",
    fontSize: 14,
  },
  regular16: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: 16,
  },
  regular18: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Regular",
    fontSize: 18,
  },
  regular20: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-Regular",
    fontSize: 20,
  },

  semibold14: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-SemiBold",
    fontSize: 14,
  },
  semibold16: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-SemiBold",
    fontSize: 16,
  },
  semibold18: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-SemiBold",
    fontSize: 18,
  },
  semibold20: {
    color: Theme.color_white,
    fontFamily: "HKGrotesk-SemiBold",
    fontSize: 20,
  },


});