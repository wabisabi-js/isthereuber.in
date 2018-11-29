import styled from 'react-emotion'
import { Link } from 'gatsby'

export const Subtitle = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 40px;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  p:not(:last-child) {
    padding-right: 20px;
  }
  flex-direction: ${props => (props.row ? 'row' : 'column')};
`

export const Anchor = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

export const List = styled.li`
  list-style: none;
  font-size: 24px;
  margin-bottom: 20px;

  span {
    margin-left: 10px;
  }
`
