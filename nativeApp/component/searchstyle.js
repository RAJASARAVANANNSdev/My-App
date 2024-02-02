import {StyleSheet} from 'react-native';

const productstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  text1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#227',
  },
  productContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    height: 420,
  },
  productImage: {
    width: 230,
    height: 190,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#9f4590',
    fontFamily: 'notoserif',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  detailsButton: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#00ABE4',
    color: '#fff',
    padding: 5,
  },
  cartButton: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#00DD00',
    color: '#fff',
    padding: 5,
  },
});

export default productstyles;
