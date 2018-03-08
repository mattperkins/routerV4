import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import { HomePage, AboutPage } from './Pages'

const Nav = () => <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
</div>


const Home = () => <div><Nav /><HomePage /></div>
const About = () => <div><Nav /><AboutPage /></div>


export default () => <div>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Switch>
</BrowserRouter>
</div>
