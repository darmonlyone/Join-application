import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { t } from "react-native-tailwindcss";

const TextEdit = ({ style, value, onChangeText, placeholder, secureTextEntry = false }) => {
	return (
		<TextInput
			style={ style || [t.border, t.bgWhite, t.rounded, t.borderBlue400, t.pX2, t.pY1]}
			value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
			secureTextEntry={secureTextEntry}
		/>
	);
};

export default TextEdit;
