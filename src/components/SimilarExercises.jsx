import {Box, Stack, Typography} from '@mui/material';
import {HorizontalScrollBar} from '@/components/HorizontalScrollBar';
import {Loader} from '@/components/Loader';

export const SimilarExercises = ({
	targetMuscleExercises,
	equipmentExercises,
}) => {
	return (
		<Box sx={{mt: '200px', p: '20px'}}>
			<Typography variant="h4" mb={5}>
				Exercises that target the same muscle group
			</Typography>
			<Stack
				direction="row"
				sx={{p: 2, m: 0, position: 'relative'}}>
				{targetMuscleExercises.length ? (
					<HorizontalScrollBar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>

      <Typography variant="h4" mb={5} mt={5}>
				Exercises that target the same equipment
			</Typography>
			<Stack
				direction="row"
				sx={{p: 2, m: 0, position: 'relative'}}>
				{equipmentExercises.length ? (
					<HorizontalScrollBar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};
