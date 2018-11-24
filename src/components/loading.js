import styled, { keyframes } from 'react-emotion'

const ripple = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }

`

const Pulsate = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    :nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`

const Loading = () => (
  <Pulsate>
    <div />
    <div />
  </Pulsate>
)

export default Loading
