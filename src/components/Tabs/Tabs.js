import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Tabs.module.scss'

export const Tabs = ({
  centered,
  children: childrenProp,
  className: classNameProp,
  fullWidth,
  indicatorColor,
  innerRef,
  mini,
  onChange,
  value,
  ...other
}) => {
  const className = classnames(
    styles.root,
    {
      [styles.centered]: centered,
      [styles.fullWidth]: fullWidth,
      [styles.mini]: mini,
    },
    classNameProp,
  )

  let childIndex = 0

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null
    }

    const childValue =
      child.props.value === undefined ? childIndex : child.props.value
    const selected = childValue === value

    childIndex += 1

    return React.cloneElement(child, {
      fullWidth,
      indicatorColor,
      mini,
      onChange,
      selected,
      value: childValue,
    })
  })

  return (
    <div className={className} ref={innerRef} role="tablist" {...other}>
      {children}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  centered: PropTypes.bool,
  fullWidth: PropTypes.bool,
  indicatorColor: PropTypes.oneOf(['default', 'primary', 'secondary']),
  innerRef: PropTypes.func,
  mini: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
}

Tabs.defaultProps = {
  indicatorColor: 'default',
  fullWidth: false,
}

export default Tabs
