import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Pages/Login";
import { AuthContext } from "./App/Context/AuthContext";
import { useEffect, useState } from "react";
import Home from "./App/Pages/Home";
export default function App() {
	const [userData, setUserData] = useState();
	useEffect(() => {}, []);
	return (
		<View>
			<AuthContext.Provider value={{ userData, setUserData }}>
				{userData ? <Home /> : <Login />}
			</AuthContext.Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffd",
		alignItems: "center",
		justifyContent: "center",
	},
});
