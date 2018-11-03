import React from 'react'
import PropTypes from 'prop-types'

const Banner = props => {
	const { children, className, ...other } = props
	return (
		<div className={className} {...other}>
			{children}
		</div>
	)
}

Banner.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Banner
