import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { capitalize } from '../utils/helpers'
import styles from './AppBar.module.scss'
const AppBar = props => {
  const { children, className: classNameProps, position, ...other } = props

  const className = classnames(
    styles.root,
    styles[`position${capitalize(position)}`],
    classNameProps,
  )
  return (
    <header className={classnames(styles.root, className)} {...other}>
      {children}
    </header>
  )
}

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['fixed', 'absolute', 'static']),
}

AppBar.defaultProps = {
  position: 'fixed',
}

export default AppBar
