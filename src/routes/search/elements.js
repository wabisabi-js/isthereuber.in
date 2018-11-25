import styled from 'react-emotion'

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

export const Anchor = styled.li`
  list-style: none;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`
