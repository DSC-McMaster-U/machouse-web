/* eslint-disable testing-library/no-debugging-utils */
import { Card } from '@mui/material';
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
                    <input />
                    <input />
                    <input />
                    <button />
                </div>
                <h2 />
                <div>
                    <input />
                    <input />
                    <input />
                    <button />
                </div>
            </Card>
		</BrowserRouter>
	);
});
