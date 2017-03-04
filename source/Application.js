import React, { Component, PropTypes } from 'react'
import { Router } from 'sitepack-react'


const Application = ({ site, history }) =>
  <Router site={site} history={history} />


export default Application
