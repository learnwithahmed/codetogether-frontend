import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './TabPanel.module.scss'

const TabPanel = props => {
	const { children, className, ...other } = props

	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default TabPanel
