import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import List from '../List'
import styles from './AppBarMenu.module.scss'

const AppBarMenu = props => {
	const {
		children,
		className,
		ListProps: {
			className: ListPropsClassName,
			isMobile,
			...ListPropsProp
		} = {},
		...other
	} = props
	return (
		<nav className={className} {...other}>
			<List
				className={classnames(
					styles.root,
					{
						[styles.isMobile]: isMobile,
					},
					ListPropsClassName,
				)}
				{...ListPropsProp}
			>
				{children}
			</List>
		</nav>
	)
}

AppBarMenu.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	ListProps: PropTypes.object,
}

export default AppBarMenu
