// @inheritedComponent ButtonBase

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from '../styles/withStyles'
import ButtonBase from '../ButtonBase'
import Spinner from '../Spinner'

export const styles = theme => ({
  root: {
    ...theme.typography.button,
    minWidth: '200px',
    padding: '10px 28px',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shorter,
    }),
    lineHeight: 1.5,
    textAlign: 'center',

    '&$default': {
      color: theme.palette.text.primary,
    },
    '&$primary': {
      color: theme.palette.primary.main,
    },
    '&$secondary': {
      color: theme.palette.secondary.main,
    },
    '&$error': {
      color: theme.palette.error.main,
    },
    '&$success': {
      color: theme.palette.success.main,
    },
    '&$outlined': {
      boxShadow: 'inset 0 0 0 1px currentColor',

      '&:hover': {
        boxShadow: 'inset 0 0 0 2px currentColor',
      },
    },
    '&$filled': {
      backgroundColor: 'currentColor',
    },
    '&$filled$default': {
      '&:hover': {
        backgroundColor: theme.palette.text.primary,
      },
    },
    '&$filled$primary': {
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    '&$filled$secondary': {
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    '&$filled$error': {
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
    },
    '&$filled$success': {
      '&:hover': {
        backgroundColor: theme.palette.success.dark,
      },
    },
    '&$fullWidth': {
      width: '100%',
      minWidth: 0,
    },
    '&$disabled': {
      opacity: 0.75,
      color: theme.palette.text.disabled,
      pointerEvents: 'none', // Disable link interactions
      cursor: 'default',
    },
    '&$loading': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'default',
    },
  },
  // colors
  default: {},
  primary: {},
  secondary: {},
  error: {},
  success: {},
  // variants
  outlined: {},
  filled: {},
  // other
  fullWidth: {},
  // states
  disabled: {},
  loading: {},
  // sub components
  inner: {
    '$outlined &': {
      color: theme.palette.text.primary,
    },
    '$outlined$disabled &': {
      color: theme.palette.text.disabled,
    },
    '$filled &': {
      color: theme.palette.background.default,
    },
  },
  spinnerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '12px 0',

    '& > *': {
      display: 'block',
      height: '100%',
      margin: '0 auto',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',

    '& > * + *': {
      marginLeft: '10px',
    },
    '$loading &': {
      opacity: 0,
    },
  },
})

export const Button = ({
  children,
  classes,
  className: classNameProp,
  color,
  component,
  disabled,
  fullWidth,
  href,
  innerRef,
  loading,
  type,
  variant,
  ...other
}) => {
  const filled = variant === 'filled'

  const className = classnames(
    classes.root,
    classes[color],
    {
      [classes.outlined]: !filled,
      [classes.filled]: filled,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.loading]: loading,
    },
    classNameProp
  )

  return (
    <ButtonBase
      {...other}
      className={className}
      innerRef={innerRef}
      component={component}
      disabled={disabled}
      href={href}
      type={type}
    >
      <div className={classes.inner}>
        {loading && (
          <div className={classes.spinnerWrapper}>
            <Spinner />
          </div>
        )}

        <div className={classes.content}>{children}</div>
      </div>
    </ButtonBase>
  )
}

Button.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Overrides the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * Use this property to pass a ref callback to the native root component.
   */
  innerRef: PropTypes.func,
  /**
   * If `true`, the button will be styled in a loading state.
   */
  loading: PropTypes.bool,
  /**
   * Used to control the button's purpose.
   * This property passes the value to the `type` attribute of the native button component.
   * Valid property values include `button`, `submit`, and `reset`.
   */
  type: PropTypes.string,
  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(['outlined', 'filled']),
}

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  variant: 'outlined',
}

export default withStyles(styles)(Button)
