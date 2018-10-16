import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Svg = props => {
  const { classes, className, children, color, fontSize, viewBox, ...other } = props
  return (
    <svg
      className={className}
      viewBox={viewBox}
      {...other}
    >
        {children}
    </svg>
  )
}

export default Svg
