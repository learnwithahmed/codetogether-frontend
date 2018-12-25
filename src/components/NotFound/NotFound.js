import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import MonkeyIcon from '../icons/Monkey'
import SquigglyIcon from '../icons/Squiggly'
import styles from './NotFound.module.scss'

const NotFound = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			<div className={styles.monkey}>
				<MonkeyIcon />
				<SquigglyIcon />
			</div>
			{children}
		</div>
	)
}

NotFound.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default NotFound
