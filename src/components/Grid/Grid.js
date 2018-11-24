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
			[styles[`spacing-${String(spacing)}`]]: container && spacing !== 0,
			[styles[`direction-xs-${String(direction)}`]]:
				direction !== Grid.defaultProps.direction,
			[styles[`wrap-xs-${String(wrap)}`]]: wrap !== Grid.defaultProps.wrap,
			[styles[`align-items-xs-${String(alignItems)}`]]:
				alignItems !== Grid.defaultProps.alignItems,
			[styles[`align-content-xs-${String(alignContent)}`]]:
				alignContent !== Grid.defaultProps.alignContent,
			[styles[`justify-xs-${String(justify)}`]]: justify !== Grid.defaultProps.justify,
			[styles['grid-xs']]: xs === true,
			[styles[`grid-xs-${String(xs)}`]]: xs && xs !== true,
			[styles['grid-sm']]: sm === true,
			[styles[`grid-sm-${String(sm)}`]]: sm && sm !== true,
			[styles['grid-md']]: md === true,
			[styles[`grid-md-${String(md)}`]]: md && md !== true,
			[styles['grid-lg']]: lg === true,
			[styles[`grid-lg-${String(lg)}`]]: lg && lg !== true,
			[styles['grid-xl']]: xl === true,
			[styles[`grid-xl-${String(xl)}`]]: xl && xl !== true,
		},
		classNameProp,
	)
	return <Component className={className} {...other} />
}

Grid.propTypes = {
	/**
	 * The component used for the root node.
	 * Either a string to use a DOM element or a component.
	 */
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	/**
	 * The CSS class name of the root element.
	 */
	className: PropTypes.string,
	/**
	 * Defines the `align-content` style property.
	 */
	alignContent: PropTypes.oneOf([
		'stretch',
		'center',
		'flex-start',
		'flex-end',
		'space-between',
		'space-around',
	]),
	/**
	 * If direction set to `column` , it aligns items.
	 */
	alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
	/**
	 * If direction set to `row` , it justifies items.
	 */
	justify: PropTypes.oneOf([
		'flex-start',
		'center',
		'flex-end',
		'space-between',
		'space-around',
		'space-evenly',
	]),
	/**
	 * Sets flex direction
	 */
	direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
	/**
	 * Sets flex wrapping
	 */
	wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	/**
	 * The width of the column for screenclass `xs`, between 0 and 12
	 */
	xs: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	/**
	 * The width of the column for screenclass `sm`, between 0 and 12
	 */
	sm: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	/**
	 * The width of the column for screenclass `md`, between 0 and 12
	 */
	md: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	/**
	 * The width of the column for screenclass `lg`, between 0 and 12
	 */
	lg: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	/**
	 * The width of the column for screenclass `xl`, between 0 and 12
	 */
	xl: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	/**
	 * Sets gutter between child items when used as component type container,
	 */
	spacing: PropTypes.oneOf(GUTTERS),
	/**
	 * If `true`, it sets `min-width: 0` on the item.
	 */
	zeroMinWidth: PropTypes.bool,
}

Grid.defaultProps = {
	alignContent: 'stretch',
	alignItems: 'stretch',
	component: 'div',
	container: false,
	direction: 'row',
	item: false,
	justify: 'flex-start',
	lg: false,
	md: false,
	sm: false,
	spacing: 0,
	wrap: 'wrap',
	xl: false,
	xs: false,
	zeroMinWidth: false,
}
export default Grid
