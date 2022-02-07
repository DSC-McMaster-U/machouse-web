import NavBar from '../components/appbar';

function ChatScreen() {
	return (
		<NavBar
			pageName='Chat'
			linkColors={['inherit', 'inherit', 'secondary', 'inherit']}
		/>
	);
}

export default ChatScreen;
