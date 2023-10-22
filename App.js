import 'react-native-gesture-handler';
import * as React from 'react';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import InspirationScreen from './components/InspirationScreen';
import PostScreen from './components/PostScreen';
import ChatScreen from './components/ChatScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";

//Der oprettes en drawernavigator (side menu)
const Drawer = createDrawerNavigator();

//I return()  oprettes først en NavigationContainer, som wrapper en Drawer.Navigator
//Drawer.Navigator wrapper tre screens, som får defineret rutenavne og referencer til de komponenter
//som skal fremvises i de enkelte screens
//Komponentern importeres fra "components" mappen.

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name='Inspiration' component={InspirationScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Post' component={PostScreen}/>
        <Drawer.Screen name='Chat' component={ChatScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


