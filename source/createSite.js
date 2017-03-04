import './global.less'
import React from 'react'
import { createSite, createSiteTransformer, Transforms, isContentGetter, createContentGetter } from 'sitepack'
import { sitepackReactTransform } from 'sitepack-react'
import convertMDXLinkPaths from 'sitepack-mdx-page-loader/transform'


const datePattern = /\d{4}-\d{2}-\d{2}/


export default ({ environment }) => {
  const siteTransformer = createSiteTransformer(
    // Add a `date` meta field based on each page's filename
    Transforms.addDefaultsById(id => {
      const match = id.match(datePattern)
      return match ? { date: match[0] } : {}
    }),

    // Set a deafult wrapper based on page filename
    Transforms.addDefaultsByPattern({
      test: /\.mdx?$/,
      options: {
        wrapper: 'MDXWrapper',
      },
    }),

    // Add a `Junction` object to each page to facilitate routing
    sitepackReactTransform(),

    // Convert MDX links from page ids to pathnames
    convertMDXLinkPaths(/\.mdx?$/),

    // Allow these options to be added to front-matter without emitting
    // a warning
    Transforms.consume([
      'date',
      'author',
      'description',
    ]),

    // Import wrapper components based on the `wrapper` metadata key
    Transforms.consumeByMap(
      'wrapper',
      wrapper => wrapper && require('./wrappers/'+wrapper+'.js').default
    ),
  )

  const site = createSite(require('../content/index.page.js'), siteTransformer)

  return site
}

