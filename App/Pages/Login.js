import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Colors from "../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthContext } from "../Context/AuthContext";
export default function Login() {
	WebBrowser.maybeCompleteAuthSession();
	const [accessToken, setAccessToken] = useState();
	const [userInfo, setUserInfo] = useState();
	const [userData, setUserData] = useContext(AuthContext);
	const [request, response, promptAsync] = Google.useAuthRequest({
		androidClientId:
			"14418695642-bofr7vrmt0thajgthoftlej69bcgrrkl.apps.googleusercontent.com",
		expoClientId:
			"14418695642-rfarcjko2mr68qkld40t6j7kr8d37c9v.apps.googleusercontent.com",
	});
	useEffect(() => {
		if (response?.type == "success") {
			setAccessToken(response.authentication.accessToken);

			getUserData();
		}
	}, [response]);
	const getUserData = async () => {
		try {
			const resp = await fetch("https://www.googleapis.com/userinfo/v2/me", {
				headers: {
					Authorization: `Bearer ${response.authentication.accessToken}`,
				},
			});
			const user = await resp.json();
			console.log("user Details, user");
			setUserInfo(user);
			setUserData(user);
		} catch {
			error;
		}
		{
			//add error handle here
		}
	};
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
				<TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
					<AntDesign
						name='google'
						size={24}
						color='#ffd'
						style={{ marginRight: 10 }}
					/>
					<Text style={styles.signInText}>Sign in with Google</Text>
				</TouchableOpacity>
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
