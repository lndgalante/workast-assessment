import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`

const Title = styled.h3`
  font-family: interface, Helvetica Neue, helvetica, sans-serif;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #b2b2b2;
`

export { Wrapper, Title }
