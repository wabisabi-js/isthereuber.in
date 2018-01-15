import App from './components/app'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Roboto');
	html, body {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
		padding: 0;
		margin: 0;
		background: #FAFAFA;
		font-family: 'Roboto', arial, sans-serif;
		font-weight: 600;
		color: #e8eaf6;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	* {
		box-sizing: border-box;
	}

	#app {
		height: 100%;
		opacity: 1;
		backface-visibility: hidden;
	}
`

const theme = {
	primary: '#4a0072',
	secondary: '#e8eaf6',
	white: '#fafafa',
	black: '#3a3a3a',
}

const Wrapper = styled.div`
  background: ${props => props.theme.primary};
  height: 100%;
`

const System = styled(Grid) `
  height: 100%;
`

export default () => (
	<ThemeProvider theme={theme}>
		<Wrapper>
			<System>
				<App />
			</System>
		</Wrapper>
	</ThemeProvider>
)
