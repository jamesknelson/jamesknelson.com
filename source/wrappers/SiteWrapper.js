import './SiteWrapper.less'
import React, { PropTypes } from 'react'
import { Link } from 'sitepack-react'


function TestTheme({ factory, active, children }) {
  return factory({ style: { color: active ? 'red' : undefined } }, children)
}


SiteWrapper.propTypes = {
  page: PropTypes.object,
  children: PropTypes.node,
}
export default function SiteWrapper({ page, children }) {
  return (
    <div className='jkn-SiteTheme'>
      <header>
        <Link page='/content/index.page.js'>James K Nelson</Link>
      </header>
      <div className='jkn-SiteTheme-sidebar'>
        <Link page='/content/pages/newsletter.md' theme={<TestTheme />}>Newsletter</Link>
      </div>
      <div className='jkn-SiteTheme-content'>
        {children || '404'}
      </div>
    </div>
  )
}
