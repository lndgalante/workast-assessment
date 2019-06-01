import styled from 'styled-components'

import { SquareProps } from './types'

const colors = ['#0F9', '#0CF', '#93F', '#F66', '#FFF35C']

const Wrapper = styled.div`
  width: 500px;
  position: absolute;
  text-align: center;
  left: calc(50% - 250px);
  top: calc(50% - 10px);
`

const Square = styled.div<SquareProps>`
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 10px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  animation: bouncer cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.75s infinite alternate;

  background: ${({ index }) => colors[index]};
  animation-delay: calc(0s + (0.1s * ${({ index }) => index}));

  @keyframes bouncer {
    100% {
      transform: scale(1.75) translateY(-20px);
    }
  }
`

export { Wrapper, Square }
