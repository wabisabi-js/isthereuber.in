import { injectGlobal } from 'react-emotion'

export default injectGlobal`
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
		width: 100%;
		opacity: 1;
		backface-visibility: hidden;
	}

	ul {
		padding: 0;
		margin: 0;
	}

a {
	position: relative;
	z-index: 99;
}

`
