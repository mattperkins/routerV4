import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { HomePage, AboutPage } from './pages'

export const Nav = () => <div style={{position:'fixed', backgroundColor:'#f33', margin:10}}>
    <Link style={{marginRight: 10}} to='/'>Home</Link>
    <Link to='/about'>About</Link>
</div>


const Home = () => <div><HomePage /></div>
const About = () => <div><Nav /><AboutPage /></div>


export default () => <div>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Switch>
</BrowserRouter>
</div>