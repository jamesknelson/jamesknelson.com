import React, { PropTypes } from 'react'


Rows.propTypes = {
  theme: PropTypes.element.isRequired,
}
Rows.defaultProps = {
  theme: <div />,
}
export default function Rows({ theme, children }) {
  return React.cloneElement(theme, {}, children)
}
