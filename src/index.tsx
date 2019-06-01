import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Trending from './pages/Trending'
import Results from './pages/GifResults'

import Favourites from './components/Favourites'
import SearchInput from './components/SearchInput'
import { FavouritesProvider } from 'context/Favourites'

import './index.css'

const App = () => {
  return (
    <Router>
      <div className="container">
        <FavouritesProvider>
          <Favourites />
          <SearchInput placeholder={'Search all the GIFs'} />

          <Switch>
            <Route path="/" exact component={Trending} />
            <Route path="/search/:query" component={Results} />
          </Switch>
        </FavouritesProvider>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
