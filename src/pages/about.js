import React from 'react'
import { Link } from 'gatsby'

import Footer from  '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <h1>About</h1>
            <p>Hi there! You are on my lifestyle & tech blog!</p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p> 
            <Footer/>
        </div>
    )
}

export default AboutPage