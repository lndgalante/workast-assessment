import React, { useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Search from 'components/Icons/Search'
import { SearchInputProps } from './types'
import { Form, Input, Button } from './styled'

const SearchInput = ({ placeholder, onSearchInputSubmit, history }: RouteComponentProps & SearchInputProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (onSearchInputSubmit) onSearchInputSubmit(query)

    history.push(query ? `/search/${query}` : '/')
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    setQuery(value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input aria-label={placeholder} placeholder={placeholder} onChange={handleChange} />
      <Button>
        <Search />
      </Button>
    </Form>
  )
}

export default withRouter(SearchInput)
