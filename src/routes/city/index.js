import { h, Component } from 'preact';
import api from '../../api';
import sizeMe from 'react-sizeme';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { Pulsate } from 'styled-loaders';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const Title = styled.h1`
	color: ${props => props.theme.secondary};
	font-size: 80px;
`;

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

class City extends Component {
	state = {
		data: [],
		loading: true
	};

	componentDidMount() {
		api(`?q=${capitalize(this.props.city)}`)
			.then(rsp => rsp.data)
			.then(data =>
				data.filter(
					city => city.city.toLowerCase() === this.props.city.toLowerCase()
				)
			)
			.then(data => this.setState({ data, loading: false }));
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ city, size }, { data, loading }) {
		return (
			<Wrapper>
				<Flex>
					{loading ? (
						<Pulsate color="#e8eaf6" />
					) : data.length > 0 ? [
						<Wrapper>
							<Confetti {...this.props.size} />
						</Wrapper>,
						<Title>YES 🚘</Title>
					 ] : (
						<Title>NO 😕</Title>
					)}
				</Flex>
			</Wrapper>
		);
	}
}

export default sizeMe({
	monitorHeight: true,
	monitorWidth: true
})(City);
