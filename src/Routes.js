import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navo, Linka } from './styles'
import { HomePage, AboutPage, ContactPage } from './pages'

export const Nav = () => <Navo>
    <Linka to='/'>Home</Linka>
    <Linka to='/about'>About</Linka>
    <Linka to='/contact'>Contact</Linka>
</Navo>

const Home = () => <div><Nav /><HomePage /></div>
const About = () => <div><Nav /><AboutPage /></div>
const Contact = () => <div><Nav /><ContactPage /></div>

export default () => <div>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
</BrowserRouter>
</div>