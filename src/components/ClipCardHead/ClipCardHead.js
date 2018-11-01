import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ClipCardHead.module.css'

const ClipCardHead = props => {
  const { children, className, ...other } = props
  return (
    <div className={classnames(styles.root, className)} {...other}>
      {children}
    </div>
  )
}

ClipCardHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default ClipCardHead
