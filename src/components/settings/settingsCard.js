import { Card } from '@mui/material';
import { useState } from 'react';
import './settingsCard.css';

const SettingsCardComp = (props) => {
	const [currentEmail, setCurrentEmail] = useState('');
	const [newEmail, setNewEmail] = useState('');
	const [confirmEmail, setConfirmEmail] = useState('');

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const currentEmailChangeHandler = (event) => {
		event.preventDefault();
		setCurrentEmail(event.target.value);
		console.log(`Current Email changed to ${event.target.value}`) // Testing purposes
	};

	const newEmailChangeHandler = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
		console.log(`New Email changed to ${event.target.value}`) // Testing purposes
	};

	const confirmEmailChangeHandler = (event) => {
		event.preventDefault();
		setConfirmEmail(event.target.value);
		console.log(`Confirm Email changed to ${event.target.value}`) // Testing purposes
	};

	const emailSubmitHandler = (event) => {
		event.preventDefault();
		console.log("Email submitted") // Testing purposes

		props.emailData = { // TODO: Configure props.emailData
			currentEmail: currentEmail,
			newEmail: newEmail,
			confirmEmail: confirmEmail,
		};

		setCurrentEmail('');
		setNewEmail('');
		setConfirmEmail('');
	};

	const currentPasswordChangeHandler = (event) => {
		event.preventDefault();
		setCurrentPassword(event.target.value);
		console.log(`Current Password changed to ${event.target.value}`) // Testing purposes
	};

	const newPasswordChangeHandler = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
		console.log(`New Password changed to ${event.target.value}`) // Testing purposes
	};

	const confirmPasswordChangeHandler = (event) => {
		event.preventDefault();
		setConfirmPassword(event.target.value);
		console.log(`Confirm Password changed to ${event.target.value}`) // Testing purposes
	};

	const passwordSubmitHandler = (event) => {
		event.preventDefault();
		console.log("Password submitted") // Testing purposes

		props.passwordData = { // TODO: Configure props.passwordData
			currentPassword: currentPassword,
			newPassword: newPassword,
			confirmPassword: confirmPassword,
		};

		setCurrentPassword('');
		setNewPassword('');
		setConfirmPassword('');
	};

	return (
		<Card id='settings-card'>
			<h2 className='header'>Change Email</h2>
			<div className='inputs'>
				<input
					className='input'
					type='text'
					value={currentEmail}
					placeholder='Current Email'
					onChange={currentEmailChangeHandler}
				/>
				<input
					className='input'
					type='text'
					value={newEmail}
					placeholder='New Email'
					onChange={newEmailChangeHandler}
				/>
				<input
					className='input'
					type='text'
					value={confirmEmail}
					placeholder='Confirm Email'
					onChange={confirmEmailChangeHandler}
				/>
				<button type='submit' className='submit-button' onClick={emailSubmitHandler}>
					Submit
				</button>
			</div>
			<h2 className='header'>Change Password</h2>
			<div className='inputs'>
				<input
					className='input'
					type='text'
					value={currentPassword}
					placeholder='Current Password'
					onChange={currentPasswordChangeHandler}
				/>
				<input
					className='input'
					type='text'
					value={newPassword}
					placeholder='New Password'
					onChange={newPasswordChangeHandler}
				/>
				<input
					className='input'
					type='text'
					value={confirmPassword}
					placeholder='Confirm Password'
					onChange={confirmPasswordChangeHandler}
				/>
				<button type='submit' className='submit-button' onClick={passwordSubmitHandler}>
					Submit
				</button>
			</div>
		</Card>
	);
};

export default SettingsCardComp;
