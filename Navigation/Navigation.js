import { StyleSheet } from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Pantallas/Home"
import Spots from "../Pantallas/Spots";
import Producto from "../Pantallas/Producto";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#C7C7C8',
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        height: 70,
                    },
                    tabBarLabel: () => null, 
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Spots}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="skateboarding" size={40} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Likes"
                    component={Home}
                    options={{   
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" size={40} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="shop"
                    component={Producto}
                    options={{   
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="shopping" size={40} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
