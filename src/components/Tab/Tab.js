// @inheritedComponent ButtonBase

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { capitalize } from '../utils/helpers'
import ButtonBase from '../ButtonBase'
import styles from './Tab.module.scss'

class Tab extends React.Component {
	handleChange = event => {
		const { onChange, value, onClick } = this.props

		if (onChange) {
			onChange(event, value)
		}

		if (onClick) {
			onClick(event)
		}
	}

	render() {
		const {
			children,
			className: classNameProp,
			disabled,
			fullWidth,
			indicatorColor,
			innerRef,
			mini,
			onChange,
			onClick,
			selected,
			...other
		} = this.props

		const className = classnames(
			styles.root,
			{
				[styles[`indicator${capitalize(indicatorColor)}`]]:
					indicatorColor !== 'default',
				[styles.disabled]: disabled,
				[styles.selected]: selected,
				[styles.fullWidth]: fullWidth,
				[styles.mini]: mini,
			},
			classNameProp,
		)

		return (
			<ButtonBase
				className={className}
				ref={innerRef}
				role="tab"
				aria-selected={selected}
				disabled={disabled}
				{...other}
				onClick={this.handleChange}
			>
				{children}
			</ButtonBase>
		)
	}
}

Tab.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	fullWidth: PropTypes.bool,
	indicatorColor: PropTypes.oneOf(['default', 'primary', 'secondary']),
	innerRef: PropTypes.func,
	mini: PropTypes.bool,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	selected: PropTypes.bool,
	value: PropTypes.any,
}

Tab.defaultProps = {
	disabled: false,
	indicatorColor: 'default',
	fullWidth: false,
}

export default Tab
