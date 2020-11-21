import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact</h1>
            <p>Reach me via <Link to="https://twitter.com/nastyacodes" target="_blank">Twitter</Link></p>
            <Footer/>
        </div>
    )
}

export default ContactPage