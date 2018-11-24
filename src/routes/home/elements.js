import styled from 'react-emotion'
import { Row } from 'react-emotion-flexboxgrid'

export const Wrapper = styled(Row)`
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media (max-width: 767px) and (max-height: 400px) {
    flex-direction: row;
  }

  @media (max-width: 360px) {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }
`

export const LogoImg = styled.img`
  @media (max-width: 360px) {
    max-width: 100px;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 80px;
  margin: 0;
  margin-top: 40px;

  @media (max-width: 1030px) {
    font-size: 55px;
  }

  @media (max-width: 435px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 50px;
  }

  @media (max-width: 360px) {
    font-size: 30px;
    margin-top: 10px;
  }
`
export const Algolia = styled.img`
  left: 50%;
  max-width: 150px;
  width: 40%;
  position: absolute;
  bottom: 30px;
  transform: translateX(-50%);
  cursor: pointer;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.secondary};
  background: transparent;
  font-size: 80px;
  height: 80px;
  width: 300px;
  color: ${props => props.theme.secondary};
  outline: none;
  padding: 0 10px;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: bold;

  &:hover,
  &:active {
    outline: none;
  }

  @media (max-width: 1030px) {
    font-size: 55px;
    height: 55px;
  }

  @media (max-width: 435px) {
    font-size: 40px;
    height: 40px;
    margin-top: 20px;
  }

  @media (max-width: 360px) {
    font-size: 30px;
    height: 35px;
    margin-top: 10px;
  }
`

export const Form = styled.form`
  display: inline;
`
