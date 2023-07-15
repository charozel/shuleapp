import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";
import Services from "../Shared/Services";

export default function Home() {
	return (
		<View>
			<Button title='Logout' onPress={() => Services.Logout()} />
		</View>
	);
}
