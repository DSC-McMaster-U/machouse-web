import NavBar from '../components/appbar';
import SettingsCard from '../components/settings';

function SettingsScreen() {
	return (
		<div>
			<NavBar
				pageName='Settings'
				linkColors={['inherit', 'inherit', 'inherit', 'secondary']}
			/>
			<SettingsCard />
		</div>
	);
}

export default SettingsScreen;
