import React from 'react'
import AboutCategory from '../screens/User_screens/AboutCategory';
import AddComment from '../screens/User_screens/AddComment';
import Comment from '../screens/User_screens/Comment';
import { BottomTabNavigator } from './BottomTabNavigator';
import Product from '../screens/User_screens/Product';
import Search from '../screens/User_screens/Search';
import Off from '../screens/User_screens/Off';

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Tab" component={BottomTabNavigator} />
            <Drawer.Screen name={'AboutCategory'} component={AboutCategory} />
            <Drawer.Screen name={'Off'} component={Off} />
            <Drawer.Screen name={'Product'} component={Product} />
            <Drawer.Screen name={'Search'} component={Search} />
            <Drawer.Screen name={'Comment'} component={Comment} />
            <Drawer.Screen name={'AddComment'} component={AddComment} />
        </Drawer.Navigator>
    )
}

export { AppNavigator }