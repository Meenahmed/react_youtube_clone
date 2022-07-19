import styled from 'styled-components';
import AminTube from '../img/logo-resized2.png';
import { AiFillHome } from 'react-icons/ai';
import { BiHistory, BiNews } from 'react-icons/bi';
import { FiSettings, FiFlag, FiHelpCircle } from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';
import {
	MdOutlineExplore,
	MdOutlineSubscriptions,
	MdOutlineVideoLibrary,
	MdLibraryMusic,
	MdSportsSoccer,
	MdOutlineMovieCreation,
	MdLiveTv,
	MdOutlineBurstMode,
	MdAccountCircle,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Container = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.bgLighter};
	color: ${({ theme }) => theme.text};
	height: 103vh;
	font-size: 14px;
	position: sticky;
	top: 0;
`;
const Wrapper = styled.div`
	padding: 18px 26px;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
	margin-bottom: 15px;
`;

const Img = styled.img`
	height: 20px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	padding: 5.5px 0px;

	&:hover {
		background-color: ${({ theme }) => theme.soft};
	}
`;

const Hr = styled.hr`
	margin: 10px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	border-radius: 3px;
	font-weight: 500;
	margin-top: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Title = styled.h2`
	font-size: 14px;
	font-weight: 600;
	color: #aaaaaa;
	margin-bottom: 10px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
	return (
		<Container>
			<Wrapper>
				<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
					<Logo>
						<Img src={AminTube} />
						AminTube
					</Logo>
				</Link>
				<Item>
					<AiFillHome />
					Home
				</Item>
				<Item>
					<MdOutlineExplore />
					Explore
				</Item>
				<Item>
					<MdOutlineSubscriptions />
					Subscriptions
				</Item>
				<Hr />
				<Item>
					<MdOutlineVideoLibrary />
					Library
				</Item>
				<Item>
					<BiHistory />
					History
				</Item>
				<Hr />
				<Login>
					Sign in to like videos,comment, and subscribe.
					<Link to='/signin' style={{ textDecoration: 'none' }}>
						<Button>
							<MdAccountCircle /> Sign in
						</Button>
					</Link>
				</Login>
				<Hr />
				<Title>Best of AminTube</Title>
				<Item>
					<MdLibraryMusic />
					Music
				</Item>
				<Item>
					<MdSportsSoccer />
					Sports
				</Item>
				<Item>
					<GiGamepad />
					Gaming
				</Item>
				<Item>
					<MdOutlineMovieCreation />
					Movies
				</Item>
				<Item>
					<BiNews />
					News
				</Item>
				<Item>
					<MdLiveTv />
					Live
				</Item>
				<Hr />
				<Item>
					<FiSettings />
					Settings
				</Item>
				<Item>
					<FiFlag />
					Report
				</Item>
				<Item>
					<FiHelpCircle />
					Help
				</Item>
				<Item onClick={() => setDarkMode(!darkMode)}>
					<MdOutlineBurstMode />
					{darkMode ? 'Light' : 'Dark'} Mode
				</Item>
			</Wrapper>
		</Container>
	);
};
export default Menu;
