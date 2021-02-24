import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import Calendar from './screens/Calendar';

export default function App() {
	return <Calendar></Calendar>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
});
