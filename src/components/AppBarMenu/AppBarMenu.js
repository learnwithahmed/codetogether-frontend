import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import List from '../List'
import styles from './AppBarMenu.module.scss'

const AppBarMenu = props => {
	const { children, className, ...other } = props
	return (
		<nav {...other}>
			<List className={classnames(styles.root, className)}>
				{children}
			</List>
		</nav>
	)
}

AppBarMenu.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default AppBarMenu
