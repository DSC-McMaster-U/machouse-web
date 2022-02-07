import NavBar from '../components/appbar';

function HomeScreen() {
	return (
		<NavBar
			pageName='Home'
			linkColors={['secondary', 'inherit', 'inherit', 'inherit']}
		/>
	);
}

export default HomeScreen;
