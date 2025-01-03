import {Box, Typography} from '@mui/material';
import {BodyPart} from './BodyPart';
import { ExerciseCard } from './ExerciseCard';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import RightArrowIcon from '@/assets/icons/right-arrow.png';
import LeftArrowIcon from '@/assets/icons/left-arrow.png';
import {useContext} from 'react';

const LeftArrow = () => {
	const {scrollPrev} = useContext(VisibilityContext);

	return (
		<Typography
			onClick={() => scrollPrev()}
			className="left-arrow">
			<img
				src={LeftArrowIcon}
				alt="left-arrow"
			/>
		</Typography>
	);
};

const RightArrow = () => {
	const {scrollNext} = useContext(VisibilityContext);

	return (
		<Typography 
			onClick={() => scrollNext()}
			className="right-arrow">
			<img
				src={RightArrowIcon}
				alt="right-arrow"
			/>
		</Typography>
	);
};

export const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data &&
				data.map((item) => (
					<Box
						key={item.id || item}
						itemID={item.id || item}
						title={item.id || item}
						m="0 40px">
						{isBodyParts ? <BodyPart
							item={item}
							bodyPart={bodyPart}
							setBodyPart={setBodyPart}
						/> : <ExerciseCard exercise={item} />}
					</Box>
				))}
		</ScrollMenu>
	);
};
