import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ButtonBase.module.scss'

const ButtonBase = props => {
	const {
		children,
		className: classNameProp,
		component,
		disabled,
		madeWithLove,
		innerRef,
		type,
		...other
	} = props
	const className = classnames(
		styles.root,
		{
			[styles.disabled]: disabled,
			[styles.madeWithLove]: madeWithLove,
		},
		classNameProp,
	)

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
	children: PropTypes.node,
	className: PropTypes.string,
	component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
	disabled: PropTypes.bool,
	madeWithLove: PropTypes.bool,
	innerRef: PropTypes.func,
	tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	type: PropTypes.string,
}

ButtonBase.defaultProps = {
	component: 'button',
	tabIndex: '0',
	type: 'button',
}

export default ButtonBase
