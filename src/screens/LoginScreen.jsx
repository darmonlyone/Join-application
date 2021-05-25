import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import { t } from "react-native-tailwindcss";
import TextEdit from "../common/TextEdit";
import Button from "../common/Button";

const LoginScreen = ({ navigation, route }) => {
	useEffect(() => {
		setEmail(route.params?.email || "");
	}, [route.params?.email]);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={[t.flex1, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
			<Text style={[t.textBlue600, t.text5xl, t.fontExtrabold, t.textCenter]}>
				JOIN
			</Text>
			<View style={[t.mT8, t.mB2, t.w1_2]}>
				<View style={[t.mB4]}>
					<Text style={[t.mB1]}>Email</Text>
					<TextEdit
						value={email}
						onChangeText={setEmail}
						placeholder={"example@email.com"}
					/>
				</View>
				<View style={[t.mB4]}>
					<Text style={[t.mB1]}>Password</Text>
					<TextEdit
						value={password}
						onChangeText={setPassword}
						placeholder={"password"}
						secureTextEntry={true}
					/>
				</View>
			</View>
			<Button
				style={[t.bgBlue500, t.mB4, t.w1_2]}
				title="Login"
				onPress={() => {
					if (password != "123456" || email == "" || password == "") {
						Alert.alert("Login fail", "Incorrect email or password", [
							{ text: "OK", onPress: () => {} },
						]);
					} else {
						Alert.alert("Login Success", "", [
							{ text: "OK", onPress: () => {navigation.navigate("Back")} },
						]);
					}
				}}
			/>
			<Button
				style={[t.bgYellow500, t.w1_2]}
				title="Register"
				onPress={() => navigation.navigate("Register")}
			/>
		</View>
	);
};

export default LoginScreen;
