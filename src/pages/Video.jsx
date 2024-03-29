import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { RiShareForwardLine, RiMenuAddFill } from 'react-icons/ri';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
	display: flex;
	/* flex-direction: column; // small screen */
	gap: 24px;
`;

const Content = styled.div`
	flex: 5; // big screen
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
	display: flex;
	/* flex-direction: column; // small screen */
	align-items: center;
	justify-content: space-between;
`;

const Info = styled.span`
	color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
	flex: 2; // for big screen
`;

const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ChannelInfo = styled.div`
	display: flex;
	gap: 20px;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
	font-weight: 500;
`;

const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
`;

const Description = styled.p`
	font-size: 14px;
`;

const Subscribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 3px;
	height: max-content;
	padding: 10px 20px;
	cursor: pointer;
`;

const Video = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width='100%'
						height='500'
						src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen
					></iframe>
				</VideoWrapper>
				<Title>Text Video</Title>
				<Details>
					<Info>7,948,154 views • July 18, 2022</Info>
					<Buttons>
						<Button>
							<FiThumbsUp /> 123
						</Button>
						<Button>
							<FiThumbsDown /> Dislike
						</Button>
						<Button>
							<RiShareForwardLine /> Share
						</Button>
						<Button>
							<RiMenuAddFill /> Save
						</Button>
					</Buttons>
				</Details>
				<Hr />
				<Channel>
					<ChannelInfo>
						<Image src='https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2422915.jpg&fm=jpg' />
						<ChannelDetail>
							<ChannelName>Meenah Code</ChannelName>
							<ChannelCounter>150K Subscriber</ChannelCounter>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								pariatur fugiat a repudiandae eveniet suscipit quas provident!
								Ratione, recusandae! Tenetur!
							</Description>
						</ChannelDetail>
					</ChannelInfo>
					<Subscribe>SUBSCRIBE</Subscribe>
				</Channel>
				<Hr />
				<Comments />
			</Content>
			<Recommendation>
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
			</Recommendation>
		</Container>
	);
};
export default Video;
