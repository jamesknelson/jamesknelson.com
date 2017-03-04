import React, { PropTypes } from 'react'


Columns.propTypes = {
  theme: PropTypes.element.isRequired,
}
Columns.defaultProps = {
  theme: <div />,
}
export default function Columns({ theme, children }) {
  return React.cloneElement(theme, {}, children)
}
