import { useState } from 'react';
import {Box} from '@mui/material';
import {HeroBanner} from '../components/HeroBanner';
import {Exercises} from '../components/Exercises';
import {SearchExercises} from '../components/SearchExercises';

export const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState('all');

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				exercises={exercises}
				setExercises={setExercises}
				bodyPart={bodyPart}
			/>
		</Box>
	);
};

export default Home;
