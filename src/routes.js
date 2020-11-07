import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './Main'
import Etiqueta from './Etiqueta'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/etiqueta" component={Etiqueta} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router