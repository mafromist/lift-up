import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {exerciseOptions, fetchData} from '@/utils/fetchData';
import {Detail} from '@/components/Detail';
import {ExerciseVideos} from '@/components/ExerciseVideos';
import {SimilarExercises} from '@/components/SimilarExercises';

export const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const {id} = useParams();

	useEffect(() => {
		const fetchExerciseData = async () => {
			const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
			const YTSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/';

			const exerciseDetail = await fetchData(
				`${exerciseDBUrl}/exercises/${id}`,
				exerciseOptions,
			);
			setExerciseDetail(exerciseDetail);
		};
		fetchExerciseData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos />
			<SimilarExercises />
		</Box>
	);
};