import * as React from "react";
import { View, Text } from "react-native";
import { t } from "react-native-tailwindcss";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddPartyScreen from "./screens/AddPartyScreen";
import Tabbar from "./components/Tabbar";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

const Navigator = () => {
	return (
		<NavigationContainer>
			<StatusBar style="dark" />
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen
					name="Back"
					component={Tabbar}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Add Party"
					component={AddPartyScreen}
					options={{  }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
