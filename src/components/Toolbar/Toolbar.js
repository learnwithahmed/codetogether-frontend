import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Toolbar.module.scss'

const Toolbar = props => {
	const {
		children,
		className: classNameProp,
		disableGutters,
		variant,
		...other
	} = props

	const className = classNames(
		styles.root,
		styles[variant],
		{
			[styles.gutters]: !disableGutters,
		},
		classNameProp,
	)

	return (
		<div className={className} {...other}>
			{children}
		</div>
	)
}

Toolbar.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	disableGutters: PropTypes.bool,
	variant: PropTypes.oneOf(['default', 'regular', 'dense']),
}

Toolbar.defaultProps = {
	disableGutters: false,
	variant: 'default',
}

export default Toolbar
