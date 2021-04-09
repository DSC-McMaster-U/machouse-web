import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';

const DATA = [
	{
		name: 'Choose House',
		list: ['House x', 'House y', 'House z'],
	},
	{
		name: 'Join house',
		list: ['House x', 'House y', 'House z'],
	},
	{
		name: 'Personal Settings',
		list: ['Edit Profile', 'Change password', 'Notifications'],
	},
];

const MyComponent = () => {
	const [expanded, setExpanded] = React.useState(true);

	const handlePress = () => setExpanded(!expanded);
	return (
		<SafeAreaView style={styles.container}>
			<List.Section>
				<List.Accordion key='{chooseHouse}' title='Choose house' left={(props) => <List.Icon {...props} color='#F3C761' key='{headHouses}' icon='home-account' />} id='{chooseHouse}' style={{ ...styles.card, backgroundColor: '#850044' }} titleStyle={{ color: '#ECECEC', fontSize: 20, fontWeight: 'bold' }}>
					<TouchableOpacity>
						{DATA[0].list.map((item) => {
							return <List.Item key='{childHouses}' title={item} />;
						})}
					</TouchableOpacity>
				</List.Accordion>

				<List.Accordion key='{joinHouse}' title='Join house' left={(props) => <List.Icon {...props} color='#F3C761' key='{headHousesJ}' icon='home-group' />} id='{joinHouse}' style={{ ...styles.card, backgroundColor: '#850044' }} titleStyle={{ color: '#ECECEC', fontSize: 20, fontWeight: 'bold' }}>
					<TouchableOpacity>
						{DATA[1].list.map((item) => {
							return <List.Item key='{childHousesJ}' title={item} />;
						})}
					</TouchableOpacity>
				</List.Accordion>

				<List.Accordion key='{settings}' title='Personal Settings' left={(props) => <List.Icon {...props} color='#F3C761' key='{headSettings}' icon='account-settings' />} id='{settings}' style={{ ...styles.card, backgroundColor: '#850044' }} titleStyle={{ color: '#ECECEC', fontSize: 20, fontWeight: 'bold' }}>
					<TouchableOpacity>
						{DATA[2].list.map((item) => {
							return <List.Item key='{childSettings}' title={item} />;
						})}
					</TouchableOpacity>
				</List.Accordion>
			</List.Section>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginBottom: 120,
		justifyContent: 'center',
	},
	housecontainer: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},

	houselogo: {
		width: 50,
		height: 50,
		marginTop: '140%',
	},
	card: {
		height: 100,
		padding: 15,
		borderRadius: 10,
		margin: 5,
	},
});


export default MyComponent;
