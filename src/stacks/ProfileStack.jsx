import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "../screens/ProfileScreen"

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
						headerLeft: () => null,
					}} />
		</ProfileStack.Navigator>
	);
};

export default ProfileStackScreen;