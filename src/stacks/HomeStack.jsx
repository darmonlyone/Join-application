import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { t } from "react-native-tailwindcss";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen"

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} options={{
						headerLeft: () => (
							<Text
								style={[t.textBlue600, t.fontExtrabold, t.textXl, t.mL6, t.mb2]}
							>
								JOIN
							</Text>
						),
						headerTitle: () => null,
					}} />
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
