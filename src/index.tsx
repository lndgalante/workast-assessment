import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css'

import Trending from './components/Trending'
import Results from './components/GifResults'
import SearchInput from './components/SearchInput'

ReactDOM.render(
  <Router>
    <div className="container">
      <SearchInput placeholder={'Search all the GIFs'} />

      <Switch>
        <Route path="/" exact component={Trending} />
        <Route path="/search/:query" component={Results} />
      </Switch>
    </div>
  </Router>,

  document.querySelector('#root')
)
