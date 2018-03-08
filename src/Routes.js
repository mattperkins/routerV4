import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { HomePage, AboutPage, ContactPage } from './pages'

export const Nav = () => <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
</div>


const Home = () => <div><HomePage /></div>
const About = () => <div><AboutPage /></div>
const Contact = () => <div><ContactPage /></div>


export default () => <div>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
</BrowserRouter>
</div>