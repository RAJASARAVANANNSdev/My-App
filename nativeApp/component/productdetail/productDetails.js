import {View, Text, Image, Button, Pressable} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import product from '../products';
import PDStyle from './productDetailsStyle';
import Iicon from 'react-native-vector-icons/Ionicons';
const ProductDetails = ({navigation}) => {
  const Data = product();
  const route = useRoute();
  const data = route.params;
  console.log(data.product_id, Data);
  return (
    <View style={PDStyle.container}>
      <Image style={PDStyle.img} source={Data[data.product_id].image} />
      <View style={PDStyle.txtcontainer}>
        <Text style={PDStyle.head}>{Data[data.product_id].title}</Text>
        <Text style={PDStyle.price}>{Data[data.product_id].price}</Text>
        <Text style={PDStyle.off}>{Data[data.product_id].offer}</Text>
        <Text style={PDStyle.quote}>{Data[data.product_id].quote}</Text>
      </View>
      <View>
        <Iicon
          name="bag-outline"
          title="hero"
          size={40}
          color="#000"
          style={{marginLeft: 20}}
          onPress={() => {
            console.log('pressed');
            navigation.navigate('buy');
          }}
        />
        <Pressable
          onPress={() => {
            console.log('pressed');
            navigation.navigate('buy');
          }}>
          <Text style={PDStyle.btn}>Add To Bag</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetails;
