import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Footer.module.scss'

const Footer = props => {
  const { children, className, ...other } = props
  return (
    <footer
      id="colophon"
      className={classnames(styles.root, className)}
      role="contentinfo"
      {...other}
    >
      <div className={styles.container} role="complementary">
        {children}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Footer
