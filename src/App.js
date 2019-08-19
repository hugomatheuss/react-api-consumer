import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeerList from './container/BeerList'

const RenderBeerList = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={BeerList} />
      </Switch>
    </BrowserRouter>
  )
}

export default RenderBeerList