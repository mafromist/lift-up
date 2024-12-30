import {Box, Stack, Typography} from '@mui/material';

import Logo from '@/assets/logo.jpg';

export const Footer = () => {
	return (
		<Box
			mt="80px"
			bgcolor="#FFF3F4">
			<Stack
				gap="40px"
				alignItems="center"
				px="40px"
				pt="24px">
				<img
					src={Logo}
					alt="logo"
					width="50px"
					height="50px"
				/>
				<Typography
					variant="h5"
					color="#000000"
					pb="40px"
					mt="20px">
					Made with Ambition by mafromist
				</Typography>
			</Stack>
		</Box>
	);
};
