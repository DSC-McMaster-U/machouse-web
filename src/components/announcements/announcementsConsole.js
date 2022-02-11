import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function AnnouncementsConsoleComp() {
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
					<Typography component='div' sx={{ mb: 1.5 }}>
						Announcements
					</Typography>
				</CardContent>
			</Card>
		</>
	);
}

export default AnnouncementsConsoleComp;
