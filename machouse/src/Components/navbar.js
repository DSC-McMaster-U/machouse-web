import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';

//icons
import { HiHome, HiCalendar, HiChatAlt2, HiCurrencyDollar, HiLogout } from 'react-icons/hi';

function NavBar() {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<p>Home</p>
					</Grid>
					<Grid item container direction='row' justifyContent='center' xs={4}>
						<IconButton>
							<HiHome />
						</IconButton>

						<IconButton>
							<HiCalendar />
						</IconButton>

						<IconButton>
							<HiChatAlt2 />
						</IconButton>

						<IconButton>
							<HiCurrencyDollar />
						</IconButton>
					</Grid>
					<Grid item container direction='row' justifyContent='flex-end' xs={4} spacing={1}>
						<Grid item>
							<p>Logout</p>
						</Grid>
						<Grid item>
							<IconButton>
								<HiLogout />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
