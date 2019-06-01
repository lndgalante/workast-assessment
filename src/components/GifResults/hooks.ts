import { useState, useEffect } from 'react'

import api from 'utils/api'

const useGiphySearch = (query: string) => {
  const [gifs, setGifs] = useState<null | []>(null)
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    api
      .search(query)
      .then(response => {
        const { data, meta }: { data: []; meta: any } = response
        if (meta.status !== 200) throw new Error(meta.msg)
        setGifs(data)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [query])

  return [gifs, isLoading, error]
}

export { useGiphySearch }
