import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login/Login'
import Signup from './screen/Signup/Signup'
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import ARScreen from './screen/ARScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const isLoggedIn = async () => {
  try {
    let usr = await AsyncStorage.getItem('user');
    console.log(usr);
    return;
  } catch (error) {
    console.log(error)
  }
}

const HomeStack = (options) => {
  return (<Stack.Navigator screenOptions={options}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MyCart" component={MyCart} />
    <Stack.Screen name="ProductInfo" component={ProductInfo} />
    <Stack.Screen name="ARScreen" component={ARScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>)

}

const LoginStack = (options) => {
  return (<Stack.Navigator screenOptions={options}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MyCart" component={MyCart} />
    <Stack.Screen name="ProductInfo" component={ProductInfo} />
    <Stack.Screen name="ARScreen" component={ARScreen} />
  </Stack.Navigator>)
}

const App = () => {
  const options = {
    headerShown: false,
  };

  return (

    // isLoggedIn() !== null ? (
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={options}>
    //       <Stack.Screen name="Home" component={Home} />
    //       <Stack.Screen name="MyCart" component={MyCart} />
    //       <Stack.Screen name="ProductInfo" component={ProductInfo} />
    //       <Stack.Screen name="ARScreen" component={ARScreen} />
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Signup" component={Signup} />
    //     </Stack.Navigator>
    //   </NavigationContainer>)
    //   :
    //   (
    <NavigationContainer>
      {!isLoggedIn() ? LoginStack(options) : HomeStack(options)}
    </NavigationContainer>
    // )


  );
};


export default App;
