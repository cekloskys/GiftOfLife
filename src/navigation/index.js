import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import InformationScreen from "../screens/InformationScreen";
import PDFScreen from "../screens/PDFScreen";
import DetailScreen from "../screens/DetailsScreen";
import SignUpScreens from "../screens/SignUpScreen";
import { Foundation, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

const RootNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {

    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Videos"
                component={DiscoverStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="video" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Pictures"
                component={PictureStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="picture-o" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Sign Up"
                component={SignUpScreen}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="grin-hearts" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

const DiscoverStack = createStackNavigator();

const DiscoverStackNavigator = () => {
    return (
        <DiscoverStack.Navigator>
            <DiscoverStack.Screen name="Watch Our Videos" component={InformationScreen} />
        </DiscoverStack.Navigator>
    );
};

const PictureStack = createStackNavigator();

const PictureStackNavigator = () => {
    return (
        <PictureStack.Navigator>
            <PictureStack.Screen name="Look At Our Pictures" component={PDFScreen} />
            <PictureStack.Screen name="Read More" component={DetailScreen} />
        </PictureStack.Navigator>
    );
};

export default RootNavigator;