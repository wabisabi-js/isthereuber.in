import { h, Component } from 'preact';
import style from './style';
import api from '../../api';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default class City extends Component {
	state = {
		data: [],
		loading: true
	};

	componentDidMount() {
		api(`?q=${capitalize(this.props.city)}`)
			.then(rsp => rsp.data)
			.then(data =>
				data.filter(city => city.city.toLowerCase() === this.props.city)
			)
			.then(data => this.setState({ data, loading: false }));
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ city }, { data, loading }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {city}</h1>
				<p>This is the city profile for a city named {city}.</p>
				{loading ? 'loading' : data.length > 0 ? 'YES' : 'NO'}
			</div>
		);
	}
}
