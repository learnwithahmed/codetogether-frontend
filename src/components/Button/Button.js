// @inheritedComponent ButtonBase

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { capitalize } from '../utils/helpers'
import ButtonBase from '../ButtonBase'
import styles from './Button.module.scss'

const Button = props => {
	const {
		children,
		className: classNameProp,
		color,
		fullWidth,
		size,
		...other
	} = props

	const className = classnames(
		styles.root,
		{
			[styles[`color${capitalize(color)}`]]: color !== 'default',
			[styles.fullWidth]: fullWidth,
			[styles[`size${capitalize(size)}`]]: size !== 'medium',
		},
		classNameProp,
	)

	return (
		<ButtonBase className={className} {...other}>
			<span className={styles.label}>{children}</span>
		</ButtonBase>
	)
}

Button.propTypes = {
	/**
	 * The content of the button.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * @ignore
	 */
	className: PropTypes.string,
	/**
	 * The color of the component. It supports those theme colors that make sense for this component.
	 */
	color: PropTypes.oneOf(['default', 'primary', 'secondary']),
	/**
	 * The component used for the root node.
	 * Either a string to use a DOM element or a component.
	 */
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.object,
	]),
	/**
	 * The URL to link to when the button is clicked.
	 * If defined, an `a` element will be used as the root node.
	 */
	href: PropTypes.string,
	/**
	 * @ignore
	 */
	type: PropTypes.string,
	/**
	 * The size of the button.
	 * `small` is equivalent to the dense button styling.
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Button.defaultProps = {
	color: 'default',
	component: 'button',
	type: 'button',
	size: 'medium',
}

export default Button
