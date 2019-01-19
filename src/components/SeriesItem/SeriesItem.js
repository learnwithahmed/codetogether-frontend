import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './SeriesItem.module.scss'

const SeriesItem = props => {
	const { children, className, ...other } = props
	return (
		<li className={classnames(styles.root, className)} {...other}>
			{children}
		</li>
	)
}

SeriesItem.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default SeriesItem
