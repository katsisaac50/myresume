import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Landingpage from './Landingpage'
import Aboutme from './Aboutme'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'

/* const Main = () => (
  <Switch>
    <Route exact path='/' component={Landingpage} />
  </Switch>
) */
class Main extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/myresume' component={Landingpage} />
        <Route path='/aboutme' component={Aboutme} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
      </Switch>
    )}
}

export default Main
