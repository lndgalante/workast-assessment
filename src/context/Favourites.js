import React, { createContext, useReducer } from 'react'

const initialState = {
  favourites: [],
}

const GiphyContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE_GIF': {
      const { gif } = action.payload

      return {
        ...state,
        favourites: [...state.favourites, gif],
      }
    }

    case 'REMOVE_FAVOURITE_GIF': {
      const { id } = action.payload

      return {
        ...state,
        favourites: state.favourites.filter(favourite => favourite.id === id),
      }
    }

    default: {
      return state
    }
  }
}

const GiphyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addFavouriteGif = gif => {
    dispatch({ type: 'ADD_FAVOURITE_GIF', payload: gif })
  }

  const removeFavouriteGif = id => {
    dispatch({ type: 'REMOVE_FAVOURITE_GIF', payload: id })
  }

  return (
    <GiphyContext.Provider
      value={{
        state,
        actions: { addFavouriteGif, removeFavouriteGif },
      }}
    >
      {children}
    </GiphyContext.Provider>
  )
}

export { GiphyProvider, GiphyContext as default }
