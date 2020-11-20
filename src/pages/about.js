import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Hi there! You are on my lifestyle & tech blog!</p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p> 
        </div>
    )
}

export default AboutPage