import { useState, useEffect } from 'react'

import api from 'utils/api'

const useGiphySearch = (query: string) => {
  const [gifs, setGifs] = useState<null | []>(null)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  const getGifsByQuery = async (query: string) => {
    try {
      setGifs([])
      setLoading(true)

      const response = await api.search(query)
      const { data, meta, pagination }: { data: []; meta: any; pagination: any } = response

      if (meta.status !== 200) throw new Error(meta.msg)
      if (pagination.count === 0) throw new Error(`No GIFs found for "${query}"`)

      setGifs(data)
    } catch (error) {
      setGifs([])
      setError(`${error}`.slice(7))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getGifsByQuery(query)
  }, [query])

  return [gifs, isLoading, error]
}

export { useGiphySearch }
