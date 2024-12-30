import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import Logo from '@/assets/images/Logo.png';

const Navbar = () => {
	const randomNumber = Math.floor(Math.random() * 1325);

	return (
		<Stack
			direction="row"
			justifyContent="space-around"
			sx={{
				gap: {sm: '122px', xs: '40px'},
				mt: {sm: '32px', xs: '20px'},
				justifyContent: 'none',
			}}
			px="20px">
			<Link
				className="nav-link"
				to="/">
				<img
					src={Logo}
					alt="logo"
					style={{width: '40px', height: '40px', margin: '0 20px'}}
				/>
			</Link>
			<Stack
				direction="row"
				gap="40px"
				fontSize="20px"
				alignItems="flex-end">
				<Link
					className="nav-link"
					to="/">
					Home
				</Link>
				{/* <Link
					className="nav-link"
					to={`/exercise/${randomNumber}`}>
					Exercises
				</Link> */}
			</Stack>
		</Stack>
	);
};

export default Navbar;
