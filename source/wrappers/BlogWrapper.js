import './BlogWrapper.less'
import React, { PropTypes } from 'react'
import { Link } from 'sitepack-react'


BlogWrapper.propTypes = {
  page: PropTypes.object,
  children: PropTypes.node,
}
export default function BlogWrapper({ page, children }) {
  if (children) {
    return children
  }

  const posts = page.children.map(page =>
    <article key={page.id}>
      <h2><Link page={page.id}>{page.title}</Link></h2>
      <p>{page.description}</p>
    </article>
  )
  
  return (
    <div>
      {posts}
    </div>
  )
}
