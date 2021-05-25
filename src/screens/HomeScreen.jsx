import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { t, color } from "react-native-tailwindcss";
import Ionicons from "@expo/vector-icons/Ionicons";

const STATUS = {
	JOINED: "joined",
	OWNED: "owned",
	FULL: "full",
	NONE: "none",
};

const a = [
	{
		name: "Watch Conan at cinema",
		imageUrl: "https://i.pinimg.com/736x/2c/be/53/2cbe53a5f7b170e56245cc4530a6eb01.jpg",
		amount: 2,
		userAmount: 1,
		status: STATUS.NONE,
	},
	{
		name: "Party at Tongror",
		imageUrl: "https://bk.asia-city.com/sites/default/files/u143339/mutual_content2.jpg",
		amount: 20,
		userAmount: 3,
		status: STATUS.NONE,
	},
	{
		name: "Tee noy 2 pm 20/2/2",
		imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFMpNybfdeCSx0PAmPR9Rt2w57bdnAUol_g&usqp=CAU",
		amount: 8,
		userAmount: 8,
		status: STATUS.FULL,
	},
	{
		name: "Test 1",
		imageUrl: null,
		amount: 10,
		userAmount: 0,
		status: STATUS.NONE,
	},
	{
		name: "Test 2",
		imageUrl: null,
		amount: 5,
		userAmount: 2,
		status: STATUS.NONE,
	},
	{
		name: "Test 3",
		imageUrl: null,
		amount: 5,
		userAmount: 0,
		status: STATUS.NONE,
	},
	{
		name: "Darm Party",
		imageUrl: null,
		amount: 20,
		userAmount: 0,
		status: STATUS.OWNED,
	},
]

const StatusBox = ({ status, navigation }) => {
	switch (status) {
		case STATUS.JOINED:
			return (
				<View
					style={[
						t.w18,
						t.bgBlue400,
						t.h10,
						t.justifyCenter,
						t.itemsCenter,
						t.w20,
						t.roundedLg,
					]}
				>
				<TouchableOpacity onPress={() => {navigation.replace("Back", null, null)}}><Text>UnJoin</Text></TouchableOpacity>
				</View>
			);
		case STATUS.OWNED:
			return (
				<View
					style={[
						t.w18,
						t.bgRed500,
						t.h10,
						t.justifyCenter,
						t.itemsCenter,
						t.w20,
						t.roundedLg,
					]}
				>
					<Text>Own</Text>
				</View>
			);
		case STATUS.FULL:
			return (
				<View
					style={[
						t.w18,
						t.bgGray400,
						t.h10,
						t.justifyCenter,
						t.itemsCenter,
						t.w20,
						t.roundedLg,
					]}
				>
					<Text>Full</Text>
				</View>
			);
		default:
			return (
				<View
					style={[
						t.w18,
						t.bgYellow400,
						t.h10,
						t.justifyCenter,
						t.itemsCenter,
						t.w20,
						t.roundedLg,
					]}
				>
					<TouchableOpacity onPress={() => {navigation.replace("Back", null, null)}}><Text>Join</Text></TouchableOpacity>
				</View>
			);
	}
};

const PartyBox = ({ name, imageUrl, amount, userAmount, status, navigation }) => {
	return (
		<View
			style={[
				t.w40,
				t.mT5,
				t.mX2,
				t.bgWhite,
				t.flex,
				t.flexCol,
				t.roundedLg,
				t.shadow
			]}
		>
			<View style={[]}>
				<View style={[t.p3, t.w40, t.h40]}>
					<Image
						style={[t.hFull, t.wFull, t.rounded]}
						source={{
							uri:
								imageUrl ||
								"https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png",
						}}
					/>
				</View>
			</View>
			<View style={[t.pX4, t.pB2]}>
				<View>
					<Text numberOfLines={2} style={[t.fontBold, t.textBase, {height: 40}]}>
						{name}
					</Text>
				</View>
				<View>
					<View
						style={[t.wFull, t.bgGray500, t.hPx, t.roundedFull, t.pX2, t.mT4]}
					></View>
					<View
						style={[t.flex, t.flexRow, t.itemsCenter, t.justifyCenter, t.pY2]}
					>
						<Text style={[t.mR4]}>
							{userAmount}/{amount}
						</Text>
						<StatusBox status={status} navigation={navigation}/>
					</View>
				</View>
			</View>
		</View>
	);
};

const HomeScreen = ({ navigation }) => {
	const [parties, setParties] = useState(a);

	return (
		<View style={[t.flex1]}>
			<ScrollView
				contentContainerStyle={[
					t.pY4,
					t.flexWrap,
					t.flexRow,
					t.itemsCenter,
					t.justifyCenter,
				]}
			>
				{parties.map((party, i) => (
					<PartyBox
						key={i}
						name={party.name}
						imageUrl={party.imageUrl}
						amount={party.amount}
						userAmount={party.userAmount}
						status={party.status}
						navigation={navigation}
					/>
				))}
			</ScrollView>
			<TouchableOpacity
				style={[
					t.absolute,
					t.w16,
					t.h16,
					t.bgYellow500,
					t.roundedFull,
					t.justifyCenter,
					t.itemsCenter,
					t.right0,
					t.bottom0,
					t.mR4,
					t.mB4,
					t.shadowLg,
				]}
				onPress={() => navigation.navigate("Add Party")}
			>
				<Ionicons style={[t.mL1]} name={"add"} size={50} color={color.black} />
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
