import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Grid.module.scss'

const GUTTERS = [0, 8, 16, 24, 32, 40]

const Grid = props => {
	const {
		alignContent,
		alignItems,
		className: classNameProp,
		component: Component,
		container,
		direction,
		item,
		justify,
		lg,
		md,
		sm,
		spacing,
		wrap,
		xl,
		xs,
		zeroMinWidth,
		...other
	} = props
	const className = classnames(
		{
			[styles.container]: container,
			[styles.item]: item,
			[styles.zeroMinWidth]: zeroMinWidth,
			[styles[`spacing-xs-${String(spacing)}`]]:
				container && spacing !== 0,
			[styles[`direction-xs-${String(direction)}`]]:
				direction !== Grid.defaultProps.direction,
			[styles[`wrap-xs-${String(wrap)}`]]:
				wrap !== Grid.defaultProps.wrap,
			[styles[`align-items-xs-${String(alignItems)}`]]:
				alignItems !== Grid.defaultProps.alignItems,
			[styles[`align-content-xs-${String(alignContent)}`]]:
				alignContent !== Grid.defaultProps.alignContent,
			[styles[`justify-xs-${String(justify)}`]]:
				justify !== Grid.defaultProps.justify,
			[styles[`grid-xs-${String(xs)}`]]: xs !== false,
			[styles[`grid-sm-${String(sm)}`]]: sm !== false,
			[styles[`grid-md-${String(md)}`]]: md !== false,
			[styles[`grid-lg-${String(lg)}`]]: lg !== false,
			[styles[`grid-xl-${String(xl)}`]]: xl !== false,
		},
		classNameProp,
	)
	return <Component className={className} {...other} />
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	alignContent: PropTypes.oneOf([
		'stretch',
		'center',
		'flex-start',
		'flex-end',
		'space-between',
		'space-around',
	]),
	alignItems: PropTypes.oneOf([
		'flex-start',
		'center',
		'flex-end',
		'stretch',
		'baseline',
	]),
	justify: PropTypes.oneOf([
		'flex-start',
		'center',
		'flex-end',
		'space-between',
		'space-around',
		'space-evenly',
	]),
	direction: PropTypes.oneOf([
		'row',
		'row-reverse',
		'column',
		'column-reverse',
	]),
	wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	lg: PropTypes.oneOf([
		false,
		'auto',
		true,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	]),
	md: PropTypes.oneOf([
		false,
		'auto',
		true,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	]),
	sm: PropTypes.oneOf([
		false,
		'auto',
		true,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	]),
	xl: PropTypes.oneOf([
		false,
		'auto',
		true,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	]),
	xs: PropTypes.oneOf([
		false,
		'auto',
		true,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
	]),
	spacing: PropTypes.oneOf(GUTTERS),
	zeroMinWidth: PropTypes.bool,
}

Grid.defaultProps = {
	component: 'div',
	container: false,
	alignContent: 'stretch',
	alignItems: 'stretch',
	justify: 'flex-start',
	direction: 'row',
	wrap: 'wrap',
	xs: false,
	sm: false,
	md: false,
	lg: false,
	xl: false,
	spacing: 0,
	zeroMinWidth: false,
}
export default Grid
