import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { HiUserCircle } from 'react-icons/hi';
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
import Avatar from '@mui/material/Avatar';

function AnnouncementsCard(props) {
	return (
		<>
			<Card
				sx={{
					backgroundColor: '#FFFFFF',
					margin: '10px',
				}}
			>
				<CardHeader
					sx={{ maxHeight: '40px' }}
					avatar={
						<Avatar
							sx={{
								bgcolor: 'red',
								maxHeight: '30px',
								maxWidth: '30px',
								fontSize: '12px',
							}}
							aria-label='recipe'
						>
							{props.userInitials}
						</Avatar>
					}
					action={
						props.pinned ? (
							<IconButton aria-label='pin'>
								<BsPinAngleFill />
							</IconButton>
						) : (
							<IconButton aria-label='pin'>
								<BsPinAngle />
							</IconButton>
						)
					}
					title={`${props.time} Ago...`}
				/>
				<CardContent sx={{ paddingTop: 0 }}>
					{HiUserCircle}
					<Typography
						component='div'
						sx={{ mb: 1.5, fontWeight: 'bold', fontSize: '14px' }}
					></Typography>
					<Typography sx={{ fontSize: '12px' }}>{props.message}</Typography>
				</CardContent>
			</Card>
		</>
	);
}

export default AnnouncementsCard;
