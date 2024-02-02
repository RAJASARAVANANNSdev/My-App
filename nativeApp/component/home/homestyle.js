import {StyleSheet} from 'react-native';

const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#227',
  },
  productContainer: {
    margin: 10,
    paddingLeft: 20,
    paddingTop: 15,
    paddingRight: 10,
    backgroundColor: 'whitesmoke',
    borderRadius: 22,
    height: 250,
    width: 190,
  },
  productImage: {
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#9f4590',
    fontFamily: 'notoserif',
  },
  productPrice: {
    fontSize: 10,
    color: 'green',
  },
  detailsButton: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#00ABE4',
    color: '#fff',
    padding: 2,
    width: 100,
    height: 40,
    margin: 20,
  },
  cartButton: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#00DD00',
    color: '#fff',
    padding: 5,
    width: 100,
    fontSize: 32,
  },
});

export default homestyles;
