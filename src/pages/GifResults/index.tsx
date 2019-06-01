import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import StackGrid from 'react-stack-grid'

import Loader from 'components/Loader'

import { RouteParams } from './types'
import { useGiphySearch } from './hooks'

const GifResults = ({ match }: RouteComponentProps<RouteParams>) => {
  const [gifs, isLoading, error] = useGiphySearch(match.params.query)

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <StackGrid monitorImagesLoaded columnWidth={'25%'}>
        {gifs &&
          Array.isArray(gifs) &&
          gifs.map((gif: any) => <img key={gif.id} src={gif.images.downsized.url} alt={gif.title} />)}
      </StackGrid>
    </div>
  )
}

export default GifResults
