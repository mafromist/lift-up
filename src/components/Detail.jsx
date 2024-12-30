import {Typography, Stack, Button} from '@mui/material';

import BodyPartImage from '@/assets/icons/abs.gif';
import TargetImage from '@/assets/icons/personal_trainer.gif';
import EquipmentImage from '@/assets/icons/dumbbells.gif';

export const Detail = ({exerciseDetail}) => {
	const {name, bodyPart, target, equipment, gifUrl} = exerciseDetail;

	return (
    <Stack gap="60px" sx={{ flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
    </Stack>
  );
};
