import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { RouteParams } from './types'
import { useGiphySearch } from './hooks'

const GifResults = ({ match }: RouteComponentProps<RouteParams>) => {
  const [gifs, isLoading, error] = useGiphySearch(match.params.query)
  console.log('TCL: GifResults -> error', error)
  console.log('TCL: GifResults -> gifs', gifs)

  return (
    <div>
      <h2>Gif Results for "{match.params.query}"</h2>
      {isLoading && <p>loading gifs...</p>}
      {gifs && Array.isArray(gifs) && gifs.map((gif: any) => <img src={gif.images.downsized.url} alt={gif.title} />)}
    </div>
  )
}

export default GifResults
