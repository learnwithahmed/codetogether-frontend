import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Section.module.scss'

const Section = props => {
	const { children, className, first, disableBottomGutter, ...other } = props
	return (
		<section
			className={classnames(
				styles.root,
				{
					[styles.first]: first,
					[styles.disableBottomGutter]: disableBottomGutter,
				},
				className,
			)}
			{...other}
		>
			{children}
		</section>
	)
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default Section
