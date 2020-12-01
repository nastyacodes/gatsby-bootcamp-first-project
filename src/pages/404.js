import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>Unfortunately a page you are looking for isn't existing</h1>
            <p>Return to the <Link to="/">main page</Link>.</p>
        </Layout>
    )
}

export default NotFound