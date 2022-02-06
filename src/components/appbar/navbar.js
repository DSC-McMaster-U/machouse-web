/*-------------------------------MUI and Icon Imports------------------------------------------*/
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';
import {
	HiHome,
	HiCalendar,
	HiChatAlt2,
	HiCurrencyDollar,
	HiLogout,
} from 'react-icons/hi';

/*-------------------------------Router Imports----------------------------------------------- */
import { Link } from 'react-router-dom';

function NavBarComp(props) {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Grid container spacing={2}>
					<Grid
						item
						container
						justifyContent='center'
						alignItems='center'
						xs={4}
					>
						<Typography variant='h5'>{props.pageName}</Typography>
					</Grid>
					<Grid
						item
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
						xs={4}
						variant
					>
						{/*I can do this more efficiently with a map but I'll add the optimization after finishing theming */}
						<IconButton component={Link} to='/'>
							<HiHome />
						</IconButton>

						<IconButton component={Link} to='/calendar'>
							<HiCalendar />
						</IconButton>

						<IconButton component={Link} to='/chat'>
							<HiChatAlt2 />
						</IconButton>

						<IconButton component={Link} to='/ledger'>
							<HiCurrencyDollar />
						</IconButton>
					</Grid>
					<Grid
						item
						container
						direction='row'
						justifyContent='center'
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
	);
}

export default NavBarComp;
