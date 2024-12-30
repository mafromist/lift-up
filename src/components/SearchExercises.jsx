import {useState, useEffect} from 'react';
import {HorizontalScrollBar} from '@/components/HorizontalScrollBar';

import {Box, Button, Stack, TextField, Typography} from '@mui/material';

import {exerciseOptions, fetchData} from '@/utils/fetchData';

export const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
	const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions,
			);

      setBodyParts(['all', ...bodyPartsData])
		};

    fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const limit = 0 // to get all exercises, api docs noted that limit should be a numeric zero
			const exercisesData = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises?limit=${limit}`,
				exerciseOptions,
			);

			const searchedExercises = exercisesData.filter((exercise) => {
				return (
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
				);
			});

			setExercises(searchedExercises);
			setSearch('');
		}
	};

	return (
		<Stack
			alignItems="center"
			mt="37px"
			justifyContent="center"
			p="20px">
			<Typography
				fontWeight={700}
				sx={{fontSize: {lg: '44px', xs: '30px'}}}
				mb="50px"
				textAlign="center">
				Awesome Exercise You <br /> Should Know
			</Typography>
			<Box
				position="relative"
				mb="72px">
				<TextField
					sx={{
						input: {fontWeight: 700, border: 'none', borderRadius: '4px'},
						width: {lg: '900px', xs: '100%'},
						backgroundColor: '#FFFFFF',
						borderRadius: '40px',
					}}
					height="76px"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder="Search exercises"
					type="text"></TextField>
				<Button
					className="search-btn"
					sx={{
						bgcolor: '#FF2625',
						color: '#FFFFFF',
						textTransform: 'none',
						width: {lg: '175px', xs: '80px'},
						fontSize: {lg: '20px', xs: '14px'},
						height: '56px',
						borderRadius: '0 4px 4px 0',
						position: 'absolute',
						right: '0',
						top: '50%',
						transform: 'translateY(-50%)',
						cursor: 'pointer',
						display: 'inline - block',
						borderBottom: '6px solid #FF2625',
					}}
					onClick={handleSearch}>
					Search
				</Button>
			</Box>

      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}></HorizontalScrollBar> 

      </Box>
		</Stack>
	);
};
