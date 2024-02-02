import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import productstyles from './searchstyle';
import Iicon from 'react-native-vector-icons/Ionicons';
import product from './products';
const styles = StyleSheet.create({});

const ImgArray = [
  {
    id: '1',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹599 (88% Off)',
    brand: 'Lymio',
    quote: '200+ bought past in month',
    offer: '86%off',
    image: require('../images/hoodie01.jpeg'),
  },
  {
    id: '2',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹699 (88% Off)',
    brand: 'Lymio',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie02.jpeg'),
  },
  {
    id: '3',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹999 (68% Off)',
    brand: 'Trillion',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie03.jpeg'),
  },
  {
    id: '4',
    title: 'Hoodie || Sweet shirt for Women',
    price: '₹599 (40% Off)',
    brand: 'KSHS',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie04.jpeg'),
  },
  {
    id: '5',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹599 (88% Off)',
    brand: 'Lymio',
    quote: '',
    offer: '86%off',
    image: require('../images/hoodie01.jpeg'),
  },
  {
    id: '6',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹699 (88% Off)',
    brand: 'Lymio',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie02.jpeg'),
  },
  {
    id: '7',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹999 (68% Off)',
    brand: 'Trillion',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie03.jpeg'),
  },
  {
    id: '8',
    title: 'Hoodie || Sweet shirt for Women',
    price: '₹599 (40% Off)',
    brand: 'KSHS',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie04.jpeg'),
  },
  {
    id: '9',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹599 (88% Off)',
    brand: 'Lymio',
    quote: '200+ bought past in month',
    offer: '86%off',
    image: require('../images/hoodie01.jpeg'),
  },
  {
    id: '10',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹699 (88% Off)',
    brand: 'Lymio',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie02.jpeg'),
  },
  {
    id: '11',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹999 (68% Off)',
    brand: 'Trillion',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie03.jpeg'),
  },
  {
    id: '12',
    title: 'Hoodie || Sweet shirt for Women',
    price: '₹599 (40% Off)',
    brand: 'KSHS',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie04.jpeg'),
  },
  {
    id: '13',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹599 (88% Off)',
    brand: 'Lymio',
    quote: '',
    offer: '86%off',
    image: require('../images/hoodie01.jpeg'),
  },
  {
    id: '14',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹699 (88% Off)',
    brand: 'Lymio',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie02.jpeg'),
  },
  {
    id: '15',
    title: 'Hoodie || Sweet shirt for men',
    price: '₹999 (68% Off)',
    brand: 'Trillion',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie03.jpeg'),
  },
  {
    id: '16',
    title: 'Hoodie || Sweet shirt for Women',
    price: '₹599 (40% Off)',
    brand: 'KSHS',
    quote: '',
    offer: '76%off',
    image: require('../images/hoodie04.jpeg'),
  },
];

function ProductItem({id, title, image, price, brand, navigation}) {
  return (
    <View style={productstyles.productContainer}>
      <Image source={image} style={productstyles.productImage} />
      <Text style={productstyles.productName}>{brand}</Text>
      <Text style={productstyles.productName}>{title}</Text>
      <Text style={productstyles.productName}>{price}</Text>

      <View style={productstyles.productButton}>
        {/* <TouchableOpacity
          title="Details"
          onPress={() => {
            console.log('pressed');
            navigation.navigate('productlist');
          }}
          style={productstyles.detailsButton}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 25,
              fontFamily: 'Roboto',
            }}>
            Details
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          title="Add to cart"
          onPress={() => {
            console.log('pressed');
            navigation.navigate('buy');
          }}
          style={productstyles.cartButton}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 25,
              fontFamily: 'Roboto',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Search({navigation}) {
  return (
    <View style={productstyles.container}>
      <Text style={productstyles.text1}>Hoodie Items</Text>
      <TextInput
        style={{
          backgroundColor: '#fff',
          width: '60%',
          borderRadius: 10,
        }}
        placeholder="search">
        <Iicon name="search-outline" size={30} color="blue" />
      </TextInput>
      <FlatList
        data={ImgArray}
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

export default Search;
