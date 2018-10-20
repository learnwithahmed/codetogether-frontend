import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Header.module.scss'

const Header = props => {
  const { children, className, ...other } = props

  return (
    <header className={classnames(styles.root, className)} {...other}>
      {children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Header
