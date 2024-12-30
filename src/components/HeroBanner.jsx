import {Box, Stack, Button, Typography} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

export const HeroBanner = () => {
	return (
		<Box
			sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}}
			position="relative"
			p="20px">
			<Typography
				color="#FF2625"
				fontWeight="600"
				fontSize="26px">
				Fitness Club
			</Typography>
			<Typography>
				Sweat, Smile <br /> and Repeat
			</Typography>
			<Typography
				lineHeight="35px"
				fontSize="22px"
				mb={3}
				href="#exercises">
				Check out the most effective football exercises
			</Typography>
			<Button
				variant="contained"
				color="error"
				sx={{backgroundColor: '#FF2625', padding: '10px'}}>
				Explore Exercises
			</Button>
			<Typography
				fontWeight="600"
				fontSize="200px"
				color="#FF2625"
				sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}}>
				Exercise
			</Typography>
			<img
				src={HeroBannerImage}
				alt="Hero Banner"
				className="hero-banner-img"
			/>
		</Box>
	);
};
