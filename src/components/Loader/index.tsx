import React from 'react'

import { Wrapper, Square } from './styled'

const Loader = () => {
  return (
    <Wrapper>
      {Array.from({ length: 5 }, (_, index) => (
        <Square key={index} index={index} />
      ))}
    </Wrapper>
  )
}

export default Loader
