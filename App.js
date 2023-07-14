import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Pages/Login";
export default function App() {
	return (
		<View>
			<Login />
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
