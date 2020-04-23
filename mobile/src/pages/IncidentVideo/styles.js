import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    backgroundVideo: {
    alignSelf: 'stretch', 
    height: 300,
    marginTop: 50
    },
    WebViewContainer: {

      marginTop: (Platform.OS == 'android') ? 20 : 0,
  
    }
  });