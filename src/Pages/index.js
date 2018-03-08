import React from 'react'
import { Wrapper } from '../styles'
import { Nav } from '../Routes'
import Paras from './Paras'

export const HomePage = () => (
<Wrapper>
<Nav />
    <h1>Home Page</h1>
    <Paras />
</Wrapper>
)

export const AboutPage = () => (
<Wrapper>
<Nav />
<h1>About Page</h1>
<Paras />
</Wrapper>
)

export const ContactPage = () => (
<Wrapper>
<Nav />
<h1>Contact Page</h1>
<Paras />
</Wrapper>
)
