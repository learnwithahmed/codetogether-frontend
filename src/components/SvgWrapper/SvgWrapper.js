import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { capitalize } from '../utils/helpers'
import styles from './SvgWrapper.module.scss'

const SvgIcon = props => {
	const {
		children,
		className,
		color,
		component: Component,
		fontSize,
		titleAccess,
		nativeColor,
		viewBox,
		...other
	} = props

	return (
		<Component
			className={classNames(
				styles.root,
				{
					[styles[`color${capitalize(color)}`]]: color !== 'inherit',
					[styles[`fontSize${capitalize(fontSize)}`]]:
						fontSize !== 'default',
				},
				className,
			)}
			focusable="false"
			viewBox={viewBox}
			color={nativeColor}
			aria-hidden={titleAccess ? 'false' : 'true'}
			role={titleAccess ? 'img' : 'presentation'}
			{...other}
		>
			{children}
			{titleAccess ? <title>{titleAccess}</title> : null}
		</Component>
	)
}

SvgIcon.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		'inherit',
		'primary',
		'secondary',
		'error',
		'disabled',
	]),
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.object,
	]),
	fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
	nativeColor: PropTypes.string,
	titleAccess: PropTypes.string,
	viewBox: PropTypes.string,
}

SvgIcon.defaultProps = {
	color: 'inherit',
	component: 'svg',
	fontSize: 'default',
	viewBox: '0 0 30 30',
}

export default SvgIcon
