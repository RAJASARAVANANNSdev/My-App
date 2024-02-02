import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button, Pressable} from 'react-native';
import Home from './component/home/home';
import Buy from './component/buy';
import Search from './component/search';
import Profile from './component/profile';
import Icons from 'react-native-vector-icons/FontAwesome';
import ProductDetails from './component/productdetail/productDetails';
import Picon from 'react-native-vector-icons/Entypo';
import Ficon from 'react-native-vector-icons/Feather';
import Iicon from 'react-native-vector-icons/Ionicons';
import homestyles from './component/home/homestyle';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTab({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'lightgreen',
        tabBarInactiveBackgroundColor: 'white',
        Color: 'black',
        headerStyle: {
          backgroundColor: 'lightgreen',
        },
      }}>
      <Tab.Screen
        name="homeScreen"
        component={Home}
        screenOptions={{}}
        options={{
          size: 30,
          title: '',
          headerTitle: 'HOODIFY',
          headerShown: true,

          headerTitleAlign: 'center',
          headerLeft: () => {
            return <Picon name="menu" title="hero" size={40} color="#000" />;
          },

          headerRight: () => {
            return (
              <Iicon
                name="bag-outline"
                title="hero"
                size={40}
                color="#000"
                onPress={() => {
                  console.log('pressed');
                  navigation.navigate('buy');
                }}
              />
            );
          },

          tabBarIcon: () => (
            <Icons name="home" title="HOME" size={30} color="black" />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          title: '',
          headerTitle: 'Search',
          headerShown: true,
          headerLeft: () => {
            return (
              <Picon
                name="chevron-left"
                title="BAG"
                onPress={() => {
                  navigation.goBack();
                }}
                size={40}
                color="#000"
              />
            );
          },
          tabBarIcon: () => (
            <Iicon name="search-outline" size={30} color="#000" />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="buy"
        component={Buy}
        options={{
          title: '',
          headerTitle: 'ShopppingBag',
          headerShown: true,
          headerLeft: () => {
            return (
              <Picon
                name="chevron-left"
                title="BAG"
                onPress={() => {
                  navigation.goBack();
                }}
                size={40}
                color="#000"
              />
            );
          },
          tabBarIcon: () => <Iicon name="bag-outline" size={30} color="#000" />,
        }}></Tab.Screen>
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: '',
          headerTitle: 'profile',
          headerShown: true,
          headerLeft: () => {
            return (
              <Picon
                title=""
                name="chevron-left"
                onPress={() => {
                  navigation.goBack();
                }}
                size={40}
                color="#000"
              />
            );
          },
          tabBarIcon: () => <Ficon name="user" size={30} color="#000" />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="home"
          component={BottomTab}
          options={({navigation}) => ({
            title: 'HOME',
            headerShown: false,
            headerRight: () => {
              return (
                <Button
                  title="CART"
                  color="#84158"
                  onPress={() => {
                    navigation.navigate('buy');
                  }}
                />
              );
            },
          })}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
