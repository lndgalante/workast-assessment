import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  .icons {
    opacity: 0;
    transition: all 400ms ease-in-out;

    :hover {
      mix-blend-mode: difference;
    }
  }

  svg {
    transition: all 400ms ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }

  :hover {
    .icons {
      opacity: 1;
    }
  }
`

const Image = styled.img``

const Icons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  padding: 8px 16px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`

export { Wrapper, Image, Icons }
