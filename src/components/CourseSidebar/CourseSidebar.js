import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './CourseSidebar.module.scss'

const CourseSidebar = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

CourseSidebar.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default CourseSidebar
