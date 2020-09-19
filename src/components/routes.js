import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, About, Projects, Music, Landing } from '../components'

const Routes = () => {
  return (
    <Switch>
      <Route path='/madeline' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/music' component={Music} />
      <Route path='/' component={Landing} />
    </Switch>
  )
}

export default Routes
