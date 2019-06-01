import React, { useContext } from 'react'

import { Data } from 'utils/types'
import GifCard from 'components/GifCard'
import FavouritesContext from 'context/Favourites'

import { FavouritesList } from './styled'

const Favourites = () => {
  const {
    state: { favourites },
  } = useContext(FavouritesContext)

  const favouritesList: [string, Data][] = Object.entries(favourites)

  return (
    <FavouritesList>
      {!favouritesList.length && <h2>Here we'll save all your favourite GIFs</h2>}
      {favouritesList.map(([id, favourite]) => (
        <GifCard key={id} gif={favourite} />
      ))}
    </FavouritesList>
  )
}

export default Favourites
