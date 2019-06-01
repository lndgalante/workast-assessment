import React from 'react'
import StackGrid from 'react-stack-grid'

import Loader from 'components/Loader'
import Header from 'components/Header'

import { useGiphyTrending } from './hooks'

const Trending = () => {
  const [gifs, isLoading, error] = useGiphyTrending()

  return (
    <div>
      <Header title="trending" />

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

export default Trending
