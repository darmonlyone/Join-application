import React, { useState } from "react";
import { View, Text } from "react-native";
import { t } from "react-native-tailwindcss";
import TextEdit from "../common/TextEdit";
import Button from "../common/Button";

const AddPartyScreen = ({ navigation }) => {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [url, setUrl] = useState("")

	return (
		<View style={[t.flex1, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
			<View style={[t.mB2, t.w1_2]}>
				<View style={[t.mB4]}>
					<Text style={[t.mB1]}>Party Title</Text>
					<TextEdit
						value={title}
						onChangeText={setTitle}
						placeholder={"title"}
					/>
				</View>
                <View style={[t.mB4]}>
					<Text style={[t.mB1]}>Amount</Text>
					<TextEdit
						value={amount}
						onChangeText={setAmount}
						placeholder={"image url"}
					/>
				</View>
				<View style={[t.mB4]}>
					<Text style={[t.mB1]}>Image URL</Text>
					<TextEdit
						value={url}
						onChangeText={setUrl}
						placeholder={"image url"}
					/>
				</View>
			</View>
			<Button
				style={[t.bgGreen500, t.mB4, t.w1_2]}
				title="Add Party"
				onPress={() => {
                    alert("Create party success")
                    navigation.navigate("Back")}}
			/>
		</View>
	);
};

export default AddPartyScreen;
