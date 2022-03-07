/* eslint-disable testing-library/no-debugging-utils */
import { Button, Card, TextField } from '@mui/material';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '.';

test('On initial render, Navbar is active', () => {
	render(
		<BrowserRouter>
			<NavBar />
			<Card>
				<h2 />
				<div>
					<TextField />
					<TextField />
					<TextField />
					<div>
						<Button />
					</div>
				</div>
				<h2 />
				<div>
					<TextField />
					<TextField />
					<TextField />
					<div>
						<Button />
					</div>
				</div>
			</Card>
		</BrowserRouter>
	);
});
