import {Stack, Typography} from '@mui/material';
import Icon from '@/assets/icons/gym.png';
import AbsIcon from '@/assets/icons/abs.gif'
import ArmIcon from '@/assets/icons/arm.gif'
import BackIcon from '@/assets/icons/back.gif'
import ChestIcon from '@/assets/icons/chest.gif'
import ShouldersIcon from '@/assets/icons/shoulders.gif'
import WaistIcon from '@/assets/icons/waist.gif'
import LegsIcon from '@/assets/icons/legs.gif'
import GymIcon from '@/assets/icons/gym.gif'
import CardioIcon from '@/assets/icons/cardio.gif'

export const BodyPart = ({item, bodyPart, setBodyPart}) => {

  const bodyPartsIcons = {
    abs: AbsIcon,
    arm: ArmIcon,
    back: BackIcon,
    chest: ChestIcon,
    shoulders: ShouldersIcon,
    waist: WaistIcon,
    lowerlegs: LegsIcon,
    cardio: CardioIcon,
    legs: LegsIcon,
    neck: ShouldersIcon,
    all: GymIcon
  }

  const getBodyPartIcon = (item) => {
    switch (true) {
      case item.includes('leg'):
        return bodyPartsIcons['legs'];
      case item.includes('arm'):
        return bodyPartsIcons['arm'];
      default:
        return bodyPartsIcons[item.toLowerCase()];
    }
  };
  
  const bodyPartIcon = getBodyPartIcon(item);

	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				borderTop: bodyPart === item ? '4px solid #FF2625' : 'none',
				backgroundColor: '#FFFFFF',
				borderBottomLeftRadius: '20px',
				width: '270px',
				height: '280px',
				cursor: 'pointer',
				gap: '45px',
			}}
      onClick={() => {
        setBodyPart(item)
        windowScrollTo({top: 1800, left:100, behavior: 'smooth'})
      }}
      >
			<img
				src={bodyPartIcon}
				alt="dumbbell"
				style={{width: '75px', height: '75px'}}
			/>
			<Typography
				fontSize="24px"
				fontWeight="bold"
				textTransform="capitalize"
				color="#3A1212">
				{item}
			</Typography>
		</Stack>
	);
};
