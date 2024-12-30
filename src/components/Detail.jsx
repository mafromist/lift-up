import {Typography, Stack, Button} from '@mui/material';

import BodyPartImage from '@/assets/icons/abs.gif';
import TargetImage from '@/assets/icons/personal_trainer.gif';
import EquipmentImage from '@/assets/icons/dumbbells.gif';

export const Detail = ({exerciseDetail}) => {
	const {name, bodyPart, target, equipment, gifUrl, instructions} =
		exerciseDetail;

	const extraDetail = [
		{icon: BodyPartImage, name: bodyPart},
		{icon: TargetImage, name: target},
		{icon: EquipmentImage, name: equipment},
	];

	return (
		<Stack
			gap="60px"
			sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
			<img
				src={gifUrl}
				alt={name}
				loading="lazy"
				className="detail-image"
			/>
			<Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
				<Typography variant="h3" fontWeight='bold' textTransform='capitalize'>{name}</Typography>
				<Typography variant="h6">{instructions}</Typography>
				{extraDetail.map((detail,index) => (
					<Stack
						key={`${detail.name}-${index}`}
						direction="row"
						gap="24px"
						alignItems="center">
						<Button
							sx={{
                border: '4px solid #34CCCC',
								borderRadius: '50%',
								width: '100px',
								height: '100px',
							}}>
							<img
								src={detail.icon}
								alt={detail.name}
								style={{width: '60px', height: '60px'}}
							/>
						</Button>
						<Typography
							variant="h5"
							textTransform="capitalize">
							{detail.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};
