import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Card.module.scss'

const Card = props => {
	const { children, className, title, description, linkText, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Card
