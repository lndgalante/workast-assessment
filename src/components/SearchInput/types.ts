import { History } from 'history'

export type SearchInputProps = {
  history: History
  placeholder: string
  onSearchInputSubmit?: (query: string) => void
}
