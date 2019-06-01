import React from 'react'

import { HeaderProps } from './types'
import { Wrapper, Title } from './styled'

const Header = ({ title }: HeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Header
