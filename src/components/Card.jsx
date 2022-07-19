import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	width: ${(props) => props.type !== 'sm' && '360px'};
	margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
	cursor: pointer;
	display: ${(props) => props.type === 'sm' && 'flex'};
	gap: 10px;
`;

const Image = styled.img`
	width: 100%;
	height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
	background-color: #999;
	flex: 1;
`;

const Details = styled.div`
	display: flex;
	margin-top: ${(props) => props.type !== 'sm' && '16px'};
	gap: 12px;
	flex: 1;
`;

const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
	display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div``;

const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
	margin: 9px 0px;
`;

const Info = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
	return (
		<Link to='/video/test' style={{ textDecoration: 'none' }}>
			<Container type={type}>
				<Image
					type={type}
					src='https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?cs=srgb&dl=pexels-pixabay-270404.jpg&fm=jpg'
				/>
				<Details type={type}>
					<ChannelImage
						type={type}
						src='https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2422915.jpg&fm=jpg'
					/>
					<Texts>
						<Title>Test Video</Title>
						<ChannelName>Meenah Code</ChannelName>
						<Info>200,908 views • 1 day ago</Info>
					</Texts>
				</Details>
			</Container>
		</Link>
	);
};
export default Card;
