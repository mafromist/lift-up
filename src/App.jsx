import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';

import Home from './pages/Home';
import {ExerciseDetail} from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<Box
			width="400px"
			sx={{width: {xl: '1488px'}}}
			m="auto">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/exercise/:id"
						element={<ExerciseDetail />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</Box>
	);
}

export default App;
