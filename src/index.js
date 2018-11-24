import App from './components/app'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { Grid } from 'react-emotion-flexboxgrid'
import './utils/global'

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

const System = styled(Grid)`
  height: 100%;
`

const Main = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <System>
        <App />
      </System>
    </Wrapper>
  </ThemeProvider>
)

export default Main
