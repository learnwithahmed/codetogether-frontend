import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './List.module.scss'

export const List = ({ className, innerRef, children, ...other }) => (
  <ul {...other} className={classnames(styles.root, className)} ref={innerRef}>
    {React.Children.map(children, child => (
      <li>{child}</li>
    ))}
  </ul>
)

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerRef: PropTypes.func,
}

export default List
