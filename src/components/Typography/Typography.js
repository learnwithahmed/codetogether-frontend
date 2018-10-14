import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Typography.module.scss'

const Typography = props => {
  const { children, classes, className: classNameProp, variant, component: componentProp, paragraph, headlineMapping, ...other } = props
  console.log(styles)
  const className = classnames(
    styles.typographyDefault,
    styles[variant],
    classNameProp,
  );

  const Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';

  return (
    <Component
      className={className}
      {...other}
    > 
      {children}
    </Component>
  )
}

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  headlineMapping: PropTypes.object,
  paragraph: PropTypes.bool,
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'display4',
    'display3',
    'display2',
    'display1',
    'headline',
    'title',
    'subheading',
    'body2',
    'body1',
    'caption',
    'button',
  ]),
}
Typography.defaultProps = {
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p',
  },
  paragraph: false,
  variant: 'display4',
}

export default Typography
