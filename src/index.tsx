import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Trending from './pages/Trending'
import Results from './pages/GifResults'
import SearchInput from './components/SearchInput'

import './index.css'

const App = () => {
  return (
    <Router>
      <div className="container">
        <SearchInput placeholder={'Search all the GIFs'} />

        <Switch>
          <Route path="/" exact component={Trending} />
          <Route path="/search/:query" component={Results} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
