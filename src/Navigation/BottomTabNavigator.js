import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopCart from '../screens/User_screens/ShopCart';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Main'
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let name;
                    let type;
                    if (route.name === 'Main') {
                        if (focused) {
                            name = 'home-sharp';
                        } else {
                            name = 'home-outline';
                        }
                    } else if (route.name === 'Category') {
                        if (focused) {
                            name = 'layers';
                        } else {
                            name = 'layers-outline';
                        }
                    } else if (route.name === 'ShopCart') {
                        if (focused) {
                            name = 'cart';
                        } else {
                            name = 'cart-outline';
                        }
                    }
                    return <Icon type={type ? type : 'Ionicons'} name={name} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="ShopCart" component={ShopCart} />
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Category" component={Category} />
        </Tab.Navigator>
    )
}
export { BottomTabNavigator }