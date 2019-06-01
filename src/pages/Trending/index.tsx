import React from 'react'
import StackGrid from 'react-stack-grid'

import Loader from 'components/Loader'
import Header from 'components/Header'
import GifCard from 'components/GifCard'

import { useGiphyTrending } from './hooks'

const Trending = () => {
  const [gifs, isLoading, error] = useGiphyTrending()

  return (
    <div>
      <Header title="trending" />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <StackGrid monitorImagesLoaded columnWidth={'25%'}>
        {gifs && Array.isArray(gifs) && gifs.map((gif: any) => <GifCard key={gif.id} gif={gif} />)}
      </StackGrid>
    </div>
  )
}

export default Trending
