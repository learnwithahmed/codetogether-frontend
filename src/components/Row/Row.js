import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { capitalize } from '../utils/helpers'
import styles from './Row.module.scss'

const Row = props => {
	const { children, className, direction, justifyContent, alignItems, ...other } = props

	return (
		<div
			className={classnames(
				styles.root,
				{
					[styles[`flex${capitalize(direction)}`]]: direction !== 'none',
					[styles[
						`justify${justifyContent ? capitalize(justifyContent) : ''}`
					]]: justifyContent,
					[styles[`align${alignItems ? capitalize(alignItems) : ''}`]]: alignItems,
				},
				className,
			)}
			{...other}
		>
			{children}
		</div>
	)
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	direction: PropTypes.oneOf(['none', 'row', 'rowReverse', 'column', 'columnReverse']),
	justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'spaced', 'around', false]),
	alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline', false]),
}

Row.defaultProps = {
	direction: 'row',
	justifyContent: false,
	alignItems: false,
}

export default Row
