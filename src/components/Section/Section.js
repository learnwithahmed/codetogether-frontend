import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Section.module.scss'

const Section = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Section
