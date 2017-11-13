import './style';
import App from './components/app';
import styled, { ThemeProvider } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import './style/index.css';

const theme = {
	primary: '#4a0072',
	secondary: '#e8eaf6',
	white: '#fafafa',
	black: '#3a3a3a'
};

const Wrapper = styled.div`
	background: ${props => props.theme.primary};
	height: 100%;
`;

const System = styled(Grid)`
	height: 100%;
`;

export default () => (
	<ThemeProvider theme={theme}>
		<Wrapper>
			<System>
				<App />
			</System>
		</Wrapper>
	</ThemeProvider>
);
