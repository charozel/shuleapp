import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
	return (
		<View>
			<Image
				style={{
					resizeMode: "center",
					height: 100,
					width: 360,
					marginTop: 160,
				}}
				source={require("../Assets/images/logo.png")}
			/>
			<View style={styles.container}>
				<Text style={styles.loginText}>Login/Sign up</Text>
				<View style={styles.button}>
					<AntDesign
						name='google'
						size={24}
						color='#ffd'
						style={{ marginRight: 10 }}
					/>
					<Text style={styles.signInText}>Sign in with Google</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},

	loginText: {
		fontSize: 24,
		textAlign: "center",
		fontWeight: "600",
		color: "#000000",
		marginTop: 40,
	},

	button: {
		backgroundColor: Colors.primary,
		padding: 10,
		margin: 30,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
	},
	signInText: {
		textAlign: "center",
		color: Colors.textButton,
	},
});
