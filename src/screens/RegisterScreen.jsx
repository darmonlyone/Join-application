import React, { useState } from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import { t } from "react-native-tailwindcss";
import TextEdit from "../common/TextEdit";
import Button from "../common/Button";
import * as Validator from "../utils/Validator";

const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	return (
		<View style={[t.flex1, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
			<View style={[t.mB2, t.w1_2]}>
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
						secureTextEntry={true}
						value={password}
						onChangeText={setPassword}
						placeholder={"password"}
					/>
				</View>
				<View style={[t.mB4]}>
					<Text style={[t.mB1]}>Repeat Password</Text>
					<TextEdit
						secureTextEntry={true}
						value={repeatPassword}
						onChangeText={setRepeatPassword}
						placeholder={"repeat password"}
					/>
				</View>
			</View>
			<Button
				style={[t.bgGreen500, t.mB4, t.w1_2]}
				title="Register"
				onPress={() => {
					if (!Validator.validateEmail(email)) {
						Alert.alert(
							"Incorrect email format",
							"Please fill in correct email format",
							[{ text: "OK", onPress: () => {} }]
						);
					} else if (!Validator.validatePassword(password)) {
						Alert.alert(
							"Incorrect password format",
							"Please fill password more than 6 character",
							[{ text: "OK", onPress: () => {} }]
						);
					} else if (password != repeatPassword) {
						Alert.alert(
							"Repeat password not match",
							"Please fill repeat password same as password field",
							[{ text: "OK", onPress: () => {} }]
						);
					} else {
						Alert.alert("Register success", "", [
							{
								text: "OK",
								onPress: () => {navigation.navigate("Login", { email })},
							},
						]);
					}
				}}
			/>
			<Button
				style={[t.bgYellow500, t.w1_2, t.mB20]}
				title="Cancel"
				onPress={() => navigation.goBack()}
			/>
		</View>
	);
};

export default RegisterScreen;
