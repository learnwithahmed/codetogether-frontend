import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Footer.module.scss'
import widget from '../styles/partials/_widgets.module.scss'

const Footer = props => {
  const { children, className, ...other } = props
  return (
    <footer 
      id="colophon"
      className={classnames(styles.siteFooter, className)}
      role="contentinfo"
      {...other}
    >
      <div className={styles.widgetArea} role="complementary">
        <div className={styles.container}>
          <div className={widget.widget}>
            <h2 className={widget['widget-title']}>Contact</h2>
            <ul>
              <li><a href="#">Hello</a></li>
              <li><a href="#">sponsor</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Footer
