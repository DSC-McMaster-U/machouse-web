import NavBar from '../components/appbar';
import AnnouncementsConsole from '../components/announcements';
function HomeScreen() {
	return (
		<>
			<NavBar
				pageName='Home'
				linkColors={['secondary', 'inherit', 'inherit', 'inherit']}
			/>
			<AnnouncementsConsole />
		</>
	);
}

export default HomeScreen;
