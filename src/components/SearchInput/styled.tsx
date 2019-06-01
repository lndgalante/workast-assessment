import styled from 'styled-components'

const Form = styled.form`
  height: 52px;
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 8px 0;
`

const Input = styled.input.attrs({ type: 'text' })`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0 17px;
  outline: none;
  border: none;
  background-color: #fff;
  border: 1px solid transparent;

  ::placeholder {
    color: var(--grey-3);
  }
`

const Button = styled.button.attrs({ type: 'submit' })`
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ::before {
    background-image: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 50%, rgb(153, 51, 255) 100%);
    background-size: 400%;
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-position: 0% 100%;
    z-index: -1;
  }
`

export { Form, Input, Button }
