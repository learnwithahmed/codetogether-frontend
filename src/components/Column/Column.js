import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Column.module.scss'

const Column = props => {
	const { children, className, variant, size, ...other } = props

	return (
		<div
			className={classnames(
				styles.root,
				{
					[styles[`col-${variant}-${size}`]]:
						size !== 'none' && variant !== 'none',
				},
				className,
			)}
			{...other}
		>
			{children}
		</div>
	)
}

Column.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
	size: PropTypes.oneOf([
		'none',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
	]),
}

Column.defaultProps = {
	variant: 'none',
	size: 'none',
}
export default Column
