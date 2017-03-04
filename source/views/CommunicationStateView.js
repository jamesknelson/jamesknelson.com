import './CommunicationStateView.less'
import React, { PropTypes } from 'react'


export default function CommunicationStateView({ isLoading, errorMessage }) {
  return (
    <div className={`
      jkn-CommunicationStateView
      jkn-CommunicationStateView-${errorMessage ? 'error' : (isLoading ? 'loading' : 'fresh')}
    `}>
      { isLoading &&
        <div className="jkn-CommunicationStateView-cube">
          <div className="jkn-CommunicationStateView-cube-c1"></div>
          <div className="jkn-CommunicationStateView-cube-c2"></div>
          <div className="jkn-CommunicationStateView-cube-c3"></div>
          <div className="jkn-CommunicationStateView-cube-c4"></div>
          <div className="jkn-CommunicationStateView-cube-c5"></div>
          <div className="jkn-CommunicationStateView-cube-c6"></div>
          <div className="jkn-CommunicationStateView-cube-c7"></div>
          <div className="jkn-CommunicationStateView-cube-c8"></div>
          <div className="jkn-CommunicationStateView-cube-c9"></div>
        </div>
      }
      { errorMessage &&
        <div className="jkn-CommunicationStateView-error">
          {errorMessage}
        </div>
      }
    </div>
  )
}
