import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {exerciseOptions, fetchData, youtubeOptions} from '@/utils/fetchData';
import {Detail} from '@/components/Detail';
import {ExerciseVideos} from '@/components/ExerciseVideos';
import {SimilarExercises} from '@/components/SimilarExercises';

export const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setexerciseVideos] = useState([]);
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercises, setEquipmentExercises] = useState([]);
	const {id} = useParams();

	useEffect(() => {
		const fetchExerciseData = async () => {
			const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
			const YTSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

			const exerciseDetailData = await fetchData(
				`${exerciseDBUrl}/exercises/exercise/${id}`,
				exerciseOptions,
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideosData = await fetchData(
				`${YTSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
				youtubeOptions,
			);
			setexerciseVideos(exerciseVideosData.contents);

			const targetMuscleExercisesData = await fetchData(
				`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,
				exerciseOptions,
			);
			setTargetMuscleExercises(targetMuscleExercisesData);
			const equipmentExercisesData = await fetchData(
				`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
				exerciseOptions,
			);
			setEquipmentExercises(equipmentExercisesData);
		};
		fetchExerciseData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercises
				targetMuscleExercises={targetMuscleExercises}
				equipmentExercises={equipmentExercises}
			/>
		</Box>
	);
};
