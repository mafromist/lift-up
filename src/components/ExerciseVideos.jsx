import {Box, Stack, Typography} from '@mui/material';

export const ExerciseVideos = ({exerciseVideos, name}) => {
	if (!exerciseVideos.length) return 'Loading...';
	return (
		<Box
			sx={{mt: {lg: '200px', xs: '20px'}}}
			p="20px">
			<Typography
				variant="h4"
				mb="33px">
				Watch{' '}
				<span style={{color: '#34CCCC', textTransform: 'capitalize'}}>{name}</span>{' '}
				exercise videos
			</Typography>
			<Stack
				justifyContent="flex-start"
				flexWrap="wrap"
				alignItems="center"
				sx={{flexDirection: {lg: 'row'}, gap: {lg: '110px', xs: '0'}}}>
				{exerciseVideos?.slice(0, 3).map((video, index) => (
					<a
						key={index}
						className="exercise-video"
						href={`https://youtube.com/watch?v=${video.video.videoId}`}
						target="_blank"
						rel="noreferrer">
						<img
							src={video.video.thumbnails[0].url}
							alt={video.video.title}
						/>
            <Box>
              <Typography variant="h6" color="#000000" fontWeight='600'>{video.video.title}</Typography>
              <Typography variant="h6" color="#000000">{video.video.channelName}</Typography>
            </Box>
					</a>
				))}
			</Stack>
		</Box>
	);
};
