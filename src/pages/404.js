import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Unfortunately a page you are looking for isn't existing</h1>
            <p>Return to the <Link to="/">main page</Link>.</p>
        </Layout>
    )
}

export default NotFound