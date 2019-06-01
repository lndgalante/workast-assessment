import React, { createContext, useReducer, useEffect } from 'react'

const initialState = {
  favourites: {},
}

const FavouritesContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE_GIFS': {
      const { gifs } = action.payload

      return {
        ...state,
        favourites: gifs,
      }
    }

    case 'ADD_FAVOURITE_GIF': {
      const { gif } = action.payload

      return {
        ...state,
        favourites: {
          ...state.favourites,
          [gif.id]: gif,
        },
      }
    }

    case 'REMOVE_FAVOURITE_GIF': {
      const { id } = action.payload
      const { [id]: removedFavourite, ...favourites } = state.favourites

      return {
        ...state,
        favourites,
      }
    }

    default: {
      return state
    }
  }
}

const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const favourites = window.localStorage.getItem('favourites') || '{}'
    addFavouriteGifs(JSON.parse(favourites))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('favourites', JSON.stringify(state.favourites))
  }, [state])

  const addFavouriteGifs = gifs => {
    dispatch({ type: 'ADD_FAVOURITE_GIFS', payload: { gifs } })
  }

  const addFavouriteGif = gif => {
    dispatch({ type: 'ADD_FAVOURITE_GIF', payload: { gif } })
  }

  const removeFavouriteGif = id => {
    dispatch({ type: 'REMOVE_FAVOURITE_GIF', payload: { id } })
  }

  return (
    <FavouritesContext.Provider
      value={{
        state,
        actions: { addFavouriteGif, removeFavouriteGif },
      }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export { FavouritesProvider, FavouritesContext as default }
