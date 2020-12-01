import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import * as propTypes from "prop-types"

import Layout from '../components/layout'
import Head from '../components/head'

// export const query = graphql`
//     query ($slug: String!) {
//         markdownRemark ( fields: { slug: { eq: $slug } } ) {
//             frontmatter {
//                 title,
//                 date
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate (formatString: "MMMM Do, YYYY")
            body {
                raw
                references {
                    ... on ContentfulAsset {
                      contentful_id
                      __typename
                      file {
                        url
                      }
                      fluid(maxWidth: 300) {
                        ...GatsbyContentfulFluid
                      }
                    }
                }
            }
        }
    }
`

const Blog = (props) => {
    const body = props.data.contentfulBlogPost.body
    const options = {
        renderNode: {
            [INLINES.ENTRY_HYPERLINK]: ({
                data: {
                  target: { slug, title },
                },
              }) => <Link to={slug}>{title}</Link>,
            [BLOCKS.EMBEDDED_ASSET]: node => <Img {...node.data.target} />,
        },
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {body && renderRichText(body, options)}
        </Layout>
    )
}

Blog.propTypes = {
    data: propTypes.object.isRequired,
}

export default Blog