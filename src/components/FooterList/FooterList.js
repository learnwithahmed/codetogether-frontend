import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './FooterList.module.scss'

const FooterList = props => {
  const { children, className, ...other } = props
  return (
    <ul
      className={cn(styles.root, className)}
      {...other}
    >
      {children}
    </ul>
  )
}

FooterList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default FooterList
