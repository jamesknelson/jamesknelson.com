import React, { PropTypes } from 'react'


Panel.propTypes = {
  theme: PropTypes.element.isRequired,
}
Panel.defaultProps = {
  theme: <div />,
}
export default function Panel({ theme, children }) {
  return React.cloneElement(theme, {}, children)
}
