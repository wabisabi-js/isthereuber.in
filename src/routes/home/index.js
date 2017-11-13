import { h, Component } from 'preact';
import style from './style';
import { route } from 'preact-router';

export default class Home extends Component {
	state = {
		value: ''
	};

	handleChange = e => this.setState({ value: e.target.value });

	handleSubmit = e => {
		e.preventDefault();
		route(this.state.value, true);
	};

	render() {
		return (
			<div class={style.home}>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} />
				</form>
			</div>
		);
	}
}
