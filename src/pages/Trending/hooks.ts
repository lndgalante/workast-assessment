import { useState, useEffect } from 'react'

import api from 'utils/api'

const useGiphyTrending = () => {
  const [gifs, setGifs] = useState<null | []>(null)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  const getTrendingGifs = async () => {
    try {
      setGifs([])
      setLoading(true)

      const response = await api.trending()
      const { data, meta }: { data: []; meta: any } = response
      if (meta.status !== 200) throw new Error(meta.msg)

      setGifs(data)
    } catch (error) {
      setGifs([])
      setError(`${error}`.slice(7))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTrendingGifs()
  }, [])

  return [gifs, isLoading, error]
}

export { useGiphyTrending }
