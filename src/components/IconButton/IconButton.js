// @inheritedComponent ButtonBase

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ButtonBase from '../ButtonBase'
import styles from './IconButton.module.scss'

const IconButton = props => {
	const { children, className, color, disabled, ...other } = props

	return (
		<ButtonBase
			className={classNames(
				styles.root,
				{
					[styles.disabled]: disabled,
				},
				className,
			)}
			disabled={disabled}
			{...other}
		>
			<span className={styles.label}>{children}</span>
		</ButtonBase>
	)
}

IconButton.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	disabled: PropTypes.bool,
}

IconButton.defaultProps = {
	disabled: false,
}

export default IconButton
