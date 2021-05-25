import * as React from "react";
import { View, Text } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "../common/Button";

const ProfileScreen = ({ navigation }) => {
	return (
		<View style={[t.flex1, t.p6]}>
			<View style={[t.p5, t.bgWhite, t.rounded, t.mB5]}>
				<Text style={[t.textLg, t.fontBold, t.mB5]}>Test@gmail.com</Text>
				<Text style={[t.textBase]}>Owns: 1</Text>
			</View>
			<Button
				style={[t.bgRed500, t.mB4, t.wFull]}
				title="Logout"
				onPress={() => navigation.navigate("Login")}
			/>
		</View>
	);
};

export default ProfileScreen;
