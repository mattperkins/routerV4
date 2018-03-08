import React from 'react'
import { Wrapper } from '../styles'
import { Nav } from '../Routes'

export const HomePage = () => (
<Wrapper>
<Nav />
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus aliquid illum a, eveniet repudiandae velit dolor quae autem iusto eius obcaecati. Velit iste, sed ipsam error fuga cupiditate quisquam.</p>
</Wrapper>
)

export const AboutPage = () => (
<Wrapper>
<Nav />
<h1>About Page</h1>
<p>Asperiores possimus aliquid illum a, eveniet repudiandae velit dolor quae autem iusto eius obcaecati. Velit iste, sed ipsam error fuga cupiditate quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Wrapper>
)

export const ContactPage = () => (
<Wrapper>
<Nav />
<h1>Contact Page</h1>
<p>Contact</p>
</Wrapper>
)
