import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ClipCard.module.scss'

const ClipCard = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

ClipCard.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default ClipCard
