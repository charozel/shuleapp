import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native";
import Services from "../Shared/Services";
import { AuthContext } from "../Context/AuthContext";

export default function Home() {
	const { userData, setUserData } = useContext(AuthContext);
	return (
		<View>
			<Button
				title='Logout'
				onPress={() => {
					Services.Logout();
					setUserData(null);
				}}
			/>
		</View>
	);
}
