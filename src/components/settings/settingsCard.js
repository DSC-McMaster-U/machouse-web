import { Card } from '@mui/material';
import './settingsCard.css';

const SettingsCardComp = () => {
	return (
		<Card id='settings-card'>
			<h2 className='header'>Change Email</h2>
			<div className='inputs'>
				<input className='input' type='text' placeholder='Current Email' />
				<input className='input' type='text' placeholder='New Email' />
				<input className='input' type='text' placeholder='Confirm Email' />
				<button className='submit-button'>Submit</button>
			</div>
			<h2 className='header'>Change Password</h2>
			<div className='inputs'>
				<input className='input' type='text' placeholder='Current Password' />
				<input className='input' type='text' placeholder='New Password' />
				<input className='input' type='text' placeholder='Confirm Password' />
				<button className='submit-button'>Submit</button>
			</div>
		</Card>
	);
};

export default SettingsCardComp;
