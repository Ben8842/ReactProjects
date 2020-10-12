import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import Temperature from './Temperature'
import Clock from './Clock'
import Warning from './Warning'
import Helloreact from './Helloreact'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route path='/temperature' component={Temperature}/>
      <Route path='/clock' component={Clock}/>
      <Route path='/warning' component={Warning}/>
      <Route path='/helloreact' component={Helloreact}/>
    </Switch>
  </main>
)

export default Main
