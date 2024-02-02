import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import homestyles from './homestyle';
import product from '../products';
import {InputAccessoryView} from 'react-native';
import Iicon from 'react-native-vector-icons/Ionicons';
const products = product();

const styles = StyleSheet.create({});

function ProductItem({id, title, image, price, brand, navigation}) {
  const onPress = () => {
    console.log('pressed');
    navigation.navigate('ProductDetails', {
      product_id: id,
    });
  };
  return (
    <Pressable onPress={onPress}>
      <View>
        <View>
          <View style={homestyles.productContainer}>
            <Image source={image} style={homestyles.productImage} />
            <Text style={homestyles.productName}>{brand}</Text>
            <Text style={homestyles.productName}>{title}</Text>
            <Text style={homestyles.productName}>{price}</Text>

            <View style={homestyles.productButton}></View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function Home({navigation}) {
  return (
    <View style={homestyles.container}>
      <Text style={homestyles.text1}>Hoodie Items</Text>

      <FlatList
        data={products}
        key={2}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem
            id={item.id}
            brand={item.brand}
            title={item.title}
            image={item.image}
            price={item.price}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

export default Home;
