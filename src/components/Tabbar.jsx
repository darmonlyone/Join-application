import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stacks/HomeStack";
import ProfileStack from "../stacks/ProfileStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { t, color } from 'react-native-tailwindcss'

const Tab = createBottomTabNavigator();

export default function Tabbar() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "HomeStack") {
						iconName = focused
							? "home"
							: "home-outline";
					} else if (route.name === "ProfileStack") {
						iconName = focused ? "body" : "body-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: color.blue500,
				inactiveTintColor: color.gray500,
			}}
		>
			<Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }}/>
			<Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile' }}/>
		</Tab.Navigator>
	);
}
