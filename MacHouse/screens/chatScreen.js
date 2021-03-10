import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import MessageInput from '../components/Chat_Components/MessageInput';
import MessageList from '../components/Chat_Components/MessageList';
import ScreenTitle from '../components/Chat_Components/ScreenTitle';

const ChatScreen = (props) => {
	const { colors } = useTheme();
	const [messages, setMessages] = useState([
		{
			sender: 'Leo S',
			initials: 'LS',
			message: 'Hello World',
			id: Math.random(),
			timestamp: '7:00 PM',
		},
		{
			sender: 'Person X',
			initials: 'PX',
			message: 'Ahoy!',
			id: Math.random(),
			timestamp: '7:02 PM',
		},
		{
			sender: 'Leo S',
			initials: 'LS',
			message: 'Harrison do your dishes!',
			id: Math.random(),
			timestamp: '9:10 PM',
		},
	]);

	// add new message to messages state
	const displayMessagesHandler = (text) => {
		setMessages((currentMessages) => [
			...currentMessages,
			{
				sender: 'Leo S',
				initials: 'LS',
				message: text,
				id: Math.random(),
				timestamp: '7:00 PM',
			},
		]);
	};

	return (
		<View style={styles.screen}>
			<ScreenTitle screenTitle='House Chat' />
			<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.messageView}>
				<MessageList messages={messages} />
				<MessageInput onSend={displayMessagesHandler} />
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	messageView: {
		flex: 1,
	},
	screen: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	bottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
});

export default ChatScreen;
