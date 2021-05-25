import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";

const TextEdit = ({ style, title, onPress, textStyle = [] }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				t.itemsCenter,
				t.justifyCenter,
				t.rounded,
				t.pY1,
				t.pX2,
				...style,
			]}
		>
			<Text style={[t.textBase, t.textGray800, ...textStyle]}>{title}</Text>
		</TouchableOpacity>
	);
};

export default TextEdit;
