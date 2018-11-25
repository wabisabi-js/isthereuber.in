import { Link } from 'preact-router/match'
import styled from 'react-emotion'

export const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 80px;
`

export const Subtitle = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 40px;
  text-align: center;
`

export const Message = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 18px;
  text-align: center;
  max-width: 80%;
  line-height: 1.5;
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  flex-shrink: 0;
  flex-wrap: wrap;

  p:not(:last-child) {
    padding-right: 20px;
  }

  flex-direction: ${props => (props.row ? 'row' : 'column')};
`

export const Company = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 24px;
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  margin-bottom: 20px;
`

export const GoBack = styled(Link)`
  color: ${props => props.theme.secondary};
  z-index: 99;
  width: 100%;
  text-align: center;
  font-size: 24px;
  text-decoration: none;
  position: absolute;
  bottom: 20px;
`
