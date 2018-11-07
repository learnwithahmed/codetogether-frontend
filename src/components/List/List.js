import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './List.module.scss'

export const List = ({ className, innerRef, children, ...other }) => (
	<ul
		className={classnames(styles.root, className)}
		ref={innerRef}
		{...other}
	>
		{React.Children.map(children, child => (
			<li>{child}</li>
		))}
	</ul>
)

List.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	innerRef: PropTypes.func,
}

export default List
