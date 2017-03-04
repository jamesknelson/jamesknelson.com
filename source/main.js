import React from 'react'
import ReactDOM from 'react-dom'
import Application from './Application'


export default function main({ environment, history, site }) {
  ReactDOM.render(
    React.createElement(Application, {
      environment: environment,
      history: history,
      site: site,
    }),
    document.getElementById('app')
  )
}
