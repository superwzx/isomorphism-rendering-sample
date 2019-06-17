import React, {Fragment} from 'react'
import loadable from '@loadable/component'
import {Router, Link} from '@reach/router'
import './main.css'

const Home = loadable(() => import('./letters/A'))
const Tour = loadable(() => import('./letters/B'))
const About = loadable(() => import(/* webpackPrefetch: true */ './letters/C'))
const Contact = loadable(() => import(/* webpackPreload: true */ './letters/D'))

const App = () => (
  <Fragment>
    <Link to="/" style={{marginRight: 10}}>Home</Link>
    <Link to="/tour" style={{marginRight: 10}}>Tour</Link>
    <Link to="/about" style={{marginRight: 10}}>About</Link>
    <Link to="/contact">Contact</Link>

    <Router>
        <Home path="/" fallback={<div>loading...</div>} />
        <Tour path="/tour" fallback={<div>loading...</div>} />
        <About path="/about" fallback={<div>loading...</div>} />
        <Contact path="/contact" fallback={<div>loading...</div>} />
    </Router>
  </Fragment>
)
 
export default App
