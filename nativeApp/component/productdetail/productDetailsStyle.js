import {StyleSheet} from 'react-native';

const PDStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#227',
  },
  img: {
    // resizeMode: 'strech',
    height: 450,
    width: 420,
    borderRadius: 5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 40,
    resizeMode: 'contain',
  },
  txtcontainer: {
    backgroundColor: 'whitesmoke',
    height: 280,
    width: 420,
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: '#000',
  },
  head: {
    fontSize: 25,
    color: '#000',
    marginTop: 10,
  },
  price: {
    color: '#000',
    fontSize: 25,
    textAlign: 'right',
    marginTop: -25,
    marginRight: 20,
  },
  off: {
    color: '#000',
    fontSize: 25,
    marginBottom: 50,
  },
  quote: {
    fontSize: 15,
    marginBottom: 80,
    color: '#000',
    fontFamily: 'sanserif',
    padding: 8,
  },
  btn: {
    width: 330,
    height: 53,
    marginTop: -50,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    marginLeft: 80,
    borderRadius: 15,
  },
});

export default PDStyle;
