/*------------------------------------------Router Imports---------------------------------------------*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './routes/homeScreen';
import CalendarScreen from './routes/calendarScreen';
import ChatScreen from './routes/chatScreen';
import LedgerScreen from './routes/ledgerScreen';
import SettingsScreen from './routes/settingsScreen';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='calendar' element={<CalendarScreen />} />
				<Route path='chat' element={<ChatScreen />} />
				<Route path='ledger' element={<LedgerScreen />} />
				<Route path='settings' element={<SettingsScreen />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
