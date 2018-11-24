import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './NotFound.module.scss'

const NotFound = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles['404-error'], className)} {...other}>
			<div className={styles.monkey}>{children}</div>
		</div>
	)
}

NotFound.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default NotFound
