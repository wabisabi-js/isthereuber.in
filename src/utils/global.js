import { injectGlobal } from 'react-emotion'

export default injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    background: #181743;
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 600;
    color: #e8eaf6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

  * {
    box-sizing: border-box;
  }

  #___gatsby, #___gatsby>div {
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
