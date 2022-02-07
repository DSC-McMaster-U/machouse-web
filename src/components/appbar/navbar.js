/* eslint-disable no-unused-vars */
/*-----------------------------------React Imports-------------------------------------------- */
import React, { useState } from 'react';

/*-------------------------------MUI and Icon Imports------------------------------------------*/
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
	HiHome,
	HiCalendar,
	HiChatAlt2,
	HiCurrencyDollar,
	HiLogout,
} from 'react-icons/hi';

/*-------------------------------Router Imports------------------------------------------------*/
import { Link } from 'react-router-dom';

/*----------------------------------Theming----------------------------------------------------*/
import Theme from '../../theme';

function NavBarComp(props) {
	const [iconColor, setIconColor] = useState(props.linkColors);
	const colorClone = [...iconColor];
	console.log(iconColor);

	//List of buttons
	const linkOptions = [
		{ page: '', icon: <HiHome /> },
		{ page: 'calendar', icon: <HiCalendar /> },
		{ page: 'chat', icon: <HiChatAlt2 /> },
		{ page: 'ledger', icon: <HiCurrencyDollar /> },
	];

	const iconLinks = linkOptions.map((link) => (
		<IconButton
			key={linkOptions.indexOf(link)}
			component={Link}
			to={'/' + link.page}
			onMouseEnter={() => {
				colorClone[linkOptions.indexOf(link)] = 'secondary';
				setIconColor(colorClone);
			}}
			onMouseLeave={() => {
				setIconColor(props.linkColors);
			}}
			color={iconColor[linkOptions.indexOf(link)]}
		>
			{link.icon}
		</IconButton>
	));

	console.log(iconLinks);

	return (
		<ThemeProvider theme={Theme}>
			<AppBar position='static'>
				<Toolbar>
					<Grid container spacing={2}>
						<Grid
							item
							container
							justifyContent='flex-start'
							alignItems='center'
							xs={4}
						>
							<Typography variant='h5'>{props.pageName}</Typography>
						</Grid>
						<Grid
							item
							container
							direction='row'
							justifyContent='space-between'
							alignItems='center'
							xs={4}
							space={1}
							variant
						>
							{iconLinks}
						</Grid>
						<Grid
							item
							container
							direction='row'
							justifyContent='flex-end'
							alignItems='center'
							xs={4}
						>
							<Grid item>
								<IconButton>
									<HiLogout />
								</IconButton>
							</Grid>
							<Grid item>
								<p style={{ color: 'rgb(11,54,96)', fontWeight: 'bold' }}>
									Logout
								</p>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default NavBarComp;
