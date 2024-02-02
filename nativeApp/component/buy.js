import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  AppRegistry,
  Pressable,
} from 'react-native';

import * as React from 'react';
//import buystyles from './buystyle';
function Buy({navigation}) {
  return (
    <View>
      <Image
        source={require('../images/bagimage.png')}
        style={{
          width: 500,
          height: 400,
          marginTop: 100,
          resizeMode: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <Text
        style={{
          fontFamily: '',
          color: 'black',
          fontWeight: 500,
          fontSize: 20,
          textAlign: 'center',
          marginTop: 50,
        }}>
        YOUR BAG IS EMPTY
      </Text>
    </View>
  );
}
//AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);
export default Buy;
