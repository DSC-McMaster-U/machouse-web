import { Button, Card, TextField } from '@mui/material';
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
		console.log(`Current Email changed to ${event.target.value}`); // Testing purposes
	};

	const newEmailChangeHandler = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
		console.log(`New Email changed to ${event.target.value}`); // Testing purposes
	};

	const confirmEmailChangeHandler = (event) => {
		event.preventDefault();
		setConfirmEmail(event.target.value);
		console.log(`Confirm Email changed to ${event.target.value}`); // Testing purposes
	};

	const emailSubmitHandler = (event) => {
		event.preventDefault();
		console.log('Email submitted'); // Testing purposes

		props.emailData = {
			// TODO: Configure props.emailData
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
		console.log(`Current Password changed to ${event.target.value}`); // Testing purposes
	};

	const newPasswordChangeHandler = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
		console.log(`New Password changed to ${event.target.value}`); // Testing purposes
	};

	const confirmPasswordChangeHandler = (event) => {
		event.preventDefault();
		setConfirmPassword(event.target.value);
		console.log(`Confirm Password changed to ${event.target.value}`); // Testing purposes
	};

	const passwordSubmitHandler = (event) => {
		event.preventDefault();
		console.log('Password submitted'); // Testing purposes

		props.passwordData = {
			// TODO: Configure props.passwordData
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
				<TextField
					label='Current Email'
					variant='standard'
					type='text'
					value={currentEmail}
					onChange={currentEmailChangeHandler}
				/>
				<TextField
					label='New Email'
					variant='standard'
					type='text'
					value={newEmail}
					onChange={newEmailChangeHandler}
				/>
				<TextField
					label='Confirm Email'
					variant='standard'
					type='text'
					value={confirmEmail}
					onChange={confirmEmailChangeHandler}
				/>
				<div className='submit-button'>
					<Button
						variant='contained'
						onClick={emailSubmitHandler}
						type='submit'
					>
						Submit
					</Button>
				</div>
			</div>
			<h2 className='header'>Change Password</h2>
			<div className='inputs'>
				<TextField
					label='Current Password'
					variant='standard'
					type='text'
					value={currentPassword}
					onChange={currentPasswordChangeHandler}
				/>
				<TextField
					label='New Password'
					variant='standard'
					type='text'
					value={newPassword}
					onChange={newPasswordChangeHandler}
				/>
				<TextField
					label='Confirm Password'
					variant='standard'
					type='text'
					value={confirmPassword}
					onChange={confirmPasswordChangeHandler}
				/>
				<div className='submit-button'>
					<Button
						// className='submit-button'
						variant='contained'
						onClick={passwordSubmitHandler}
						type='submit'
					>
						Submit
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default SettingsCardComp;
