import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Clipcard.module.css'

const Clipcard = props => {
  const { children, className, ...other } = props
  return (
    <div className={classnames(styles.root, className)} {...other}>
      {children}
    </div>
  )
}

Clipcard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Clipcard
