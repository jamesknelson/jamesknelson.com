import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Application from './Application'


export default function renderToString({ history, site }) {
  return ReactDOMServer.renderToString(
    React.createElement(Application, {
      environment: 'static',
      history: history,
      site: site,
    })
  )
}
