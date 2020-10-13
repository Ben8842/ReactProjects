import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <h2>List of React Projects</h2>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/helloreact'>Hello World</Link></li>
        <li><Link to='/temperature'>Temperature</Link></li>
        <li><Link to='/clock'>Clock</Link></li>
        <li><Link to='/warning'>Warning</Link></li>
        <li><Link to='/pizza'>Pizza</Link></li>
        <li><Link to='/flavorform'>FlavorForm</Link></li>
        <li><Link to='/todo'>todo</Link></li>
        <li><Link to='/login'>Log In project</Link></li>
        <li><Link to='/game'>Game</Link></li>
        
      </ul>
    </nav>
  </header>
)

export default Header
