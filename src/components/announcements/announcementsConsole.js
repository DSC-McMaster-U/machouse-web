import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AnnouncementsCard from './announcementsCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

function AnnouncementsConsoleComp() {
	const [newAnnouncement, setNewAnnouncement] = useState('');

	var tempAnnouncementsData = [
		{
			id: 1,
			time: '12h',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum augue phasellus urna diam purus.',
			initials: 'AW',
			pinned: true,
		},
		{
			id: 2,
			time: '13h',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum augue phasellus urna diam purus.',
			initials: 'AW',
			pinned: false,
		},
		{
			id: 3,
			time: '14h',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum augue phasellus urna diam purus.',
			initials: 'AW',
			pinned: true,
		},
	];
	const tempAnnouncements = tempAnnouncementsData.map((announcement) => (
		<AnnouncementsCard
			key={announcement.id}
			time={announcement.time}
			message={announcement.message}
			userInitials={announcement.initials}
			pinned={announcement.pinned}
		/>
	));

	return (
		<>
			<Card
				sx={{
					maxWidth: '30%',
					marginTop: '50px',
					marginLeft: '50px',
					backgroundColor: '#FFD694',
				}}
			>
				<CardContent>
					<Typography component='div' sx={{ mb: 1.5, fontWeight: 'bold' }}>
						Announcements
					</Typography>
					{tempAnnouncements}

					<div>
						<TextField
							size='small'
							sx={{
								marginTop: '12px',
								backgroundColor: 'white',
								maxWidth: '70%',
							}}
							id='outlined-basic'
							variant='outlined'
							value={newAnnouncement}
							onChange={(e) => setNewAnnouncement(e.target.value)}
							label='Write an announcement'
						/>
						<Button
							size='small'
							variant='contained'
							sx={{
								backgroundColor: '#20A39E',
								marginTop: '15px',
								marginLeft: '5px',
							}}
							onClick={() => {
								alert(newAnnouncement);
								console.log(newAnnouncement);
								setNewAnnouncement('');
							}}
						>
							Post
						</Button>
					</div>
				</CardContent>
			</Card>
		</>
	);
}

export default AnnouncementsConsoleComp;
