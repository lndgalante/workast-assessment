import React, { useContext } from 'react'

import { Data } from 'utils/types'
import FavouritesContext from 'context/Favourites'
import Link from 'components/Icons/Link'
import Heart from 'components/Icons/Heart'
import Unheart from 'components/Icons/Unheart'

import { Wrapper, Image, Icons } from './styled'

const GifCard = ({ gif }: { gif: Data }) => {
  const { id, images, title } = gif

  const {
    state: { favourites },
    actions: { addFavouriteGif, removeFavouriteGif },
  } = useContext(FavouritesContext)

  return (
    <Wrapper>
      <Icons className="icons">
        <button onClick={() => window.open(gif.url, '_blank')}>
          <Link width={20} fill="#fff" />
        </button>
        {favourites[id] ? (
          <button onClick={() => removeFavouriteGif(id)}>
            <Unheart width={20} fill="#fff" />
          </button>
        ) : (
          <button onClick={() => addFavouriteGif(gif)}>
            <Heart width={20} fill="#fff" />
          </button>
        )}
      </Icons>
      <Image src={images.downsized.url} alt={title} />
    </Wrapper>
  )
}

export default GifCard
