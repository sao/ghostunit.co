import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className='content'>
    <span className='eyebrow'>👻</span>
    <h1><strong>ghost</strong>unit</h1>
    <p>A digital product shop based in Portland, OR.</p>
    <Link to="mailto:hi@ghostunit.com">contact us</Link>
  </div>
)

export default IndexPage