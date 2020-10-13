import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Pizza from '../pizzacomponents/pizza/Pizza.js'
import Temperature from './Temperature'
import Clock from './Clock'
import Warning from './Warning'
import Helloreact from './Helloreact'
import FlavorForm from './flavorform'
import todo from '../todofolder/todo.js'
import LoginControl from './login.js'
import Game from './tiktaktoe/game.js'
import SignIn from './SignIn'
import Toggle from './toggle'


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
      <Route path='/pizza' component={Pizza}/>
      <Route path='/flavorform' component={FlavorForm}/>
      <Route path='/todo' component={todo}/>
      <Route path='/login' component={LoginControl}/>
      <Route path='/game' component={Game}/>
      <Route path='/SignIn' component={SignIn}/>
      <Route path='/toggle' component={Toggle}/>
     

    </Switch>
  </main>
)

export default Main
