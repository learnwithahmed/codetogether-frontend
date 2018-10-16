import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ButtonBase.module.scss'

const ButtonBase = props => {
    const { children, className: classNameProp, component, disabled, innerRef, type, ...other } = props
    const className = classnames(styles.root, { [styles.disabled]: disabled }, classNameProp)

    const buttonProps = {}

    let Component = component

    if (Component === 'button' && other.href) {
        Component = 'a'
    }

    if (Component === 'button') {
        buttonProps.type = type || 'button'
        buttonProps.disabled = disabled
    } else {
        buttonProps.role = 'button'
    }

    return (
        <Component className={className} ref={innerRef} {...other} {...buttonProps}>
            {children}
        </Component>
    )
}

ButtonBase.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    /**
     * If `true`, the base button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Use this property to pass a ref callback to the native root component.
     */
    innerRef: PropTypes.func,
    /**
     * @ignore
     */
    role: PropTypes.string,
    /**
     * @ignore
     */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Used to control the button's purpose.
     * This property passes the value to the `type` attribute of the native button component.
     * Valid property values include `button`, `submit`, and `reset`.
     */
    type: PropTypes.string,
}

ButtonBase.defaultProps = {
    component: 'button',
    tabIndex: '0',
    type: 'button',
}

export default ButtonBase
