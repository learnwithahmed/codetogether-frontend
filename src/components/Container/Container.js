import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Container.module.scss'

const Container = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Container
