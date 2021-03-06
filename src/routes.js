import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'
import Home from './components/Home'
import Penal from './components/Penal'
import Causas from './components/actuaciones/Causas'
import Causasprueba from './components/buttons/CausasPruebas/Causasprueba'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/penal' component={ Penal } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
          <Route exact path='/causas' component={ Causasprueba } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )