
import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import Calendar from './screens/Calendar';
import ChatScreen from "./screens/chatScreen";

export default function App() {
	return <Calendar></Calendar>;
  return <ChatScreen />;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
});
export default App;
