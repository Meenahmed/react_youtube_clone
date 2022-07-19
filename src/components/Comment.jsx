import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	gap: 10px;
	margin: 30px 0px;
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
	font-size: 13px;
	font-weight: 500;
`;
const Date = styled.span`
	font-size: 12px;
	font-weight: 400;
	color: ${({ theme }) => theme.textSoft};
	margin-left: 5px;
`;

const Text = styled.span`
	font-size: 14px;
`;

const Comment = () => {
	return (
		<Container>
			<Avatar src='https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2422915.jpg&fm=jpg' />
			<Details>
				<Name>
					Meerah Liyyah <Date>1 day ago</Date>
				</Name>
				<Text>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
					praesentium at natus debitis ratione repudiandae, molestias quisquam
					illo, soluta iure aliquam. Totam facere quaerat accusantium.
				</Text>
			</Details>
		</Container>
	);
};
export default Comment;
