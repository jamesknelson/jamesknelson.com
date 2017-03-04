import './MDXWrapper.less'
import React, { Component, PropTypes } from 'react'
import { Link, PageContentLoader } from 'sitepack-react'
import CommunicationStateView from '../views/CommunicationStateView'
import Panel from '../layouts/Panel'
import Rows from '../layouts/Rows'


export default class MDXWrapper extends Component {
  static propTypes = {
    hash: PropTypes.string,
    page: PropTypes.object,
    route: PropTypes.object,
  }

  componentDidMount() {
    const hash = this.props.hash
    if (hash && !this.props.isLoading) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView(true);
      }
    }
    else {
      window.scroll(0, 0)
    }
  }

  componentDidUpdate(prevProps) {
    const hash = this.props.hash
    if (hash &&
        (prevProps.hash !== hash ||
        prevProps.isLoading && !this.props.isLoading)) {

      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView(true);
      }
      else {
        window.scroll(0, 0)
      }
    }
  }

  renderPageContent = ({ errorMessage, isLoading, content }) =>
    <Rows>
      <CommunicationStateView
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
      {content
        ? <div className='MDXWrapper-content'>
            {React.createElement(content, {
              factories: {
                a: React.createFactory(Link)
              }
            })}
          </div>
        : <Panel />
      }
    </Rows>

  render() {
    const { page, hash } = this.props

    return (
      <PageContentLoader
        page={page}
        render={this.renderPageContent}
      />
    )
  }
}
