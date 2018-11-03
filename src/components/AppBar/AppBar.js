import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventListener from 'react-event-listener'
import { capitalize } from '../utils/helpers'
import styles from './AppBar.module.scss'

class AppBar extends React.Component {
	state = {
		isTopOfPage: true,
	}

	componentDidMount() {
		this.handleScroll()
	}

	handleScroll = () => {
		const isTopOfPage = window.pageYOffset === 0

		if (isTopOfPage !== this.state.isTopOfPage) {
			this.setState({ isTopOfPage })
		}
	}
	render() {
		const {
			children,
			className: classNameProps,
			position,
			transparent,
			...other
		} = this.props

		const { isTopOfPage } = this.state

		const className = classnames(
			styles.root,
			styles[`position${capitalize(position)}`],
			{
				[styles.transparent]: transparent && isTopOfPage,
			},
			classNameProps,
		)
		return (
			<header className={classnames(styles.root, className)} {...other}>
				{transparent && (
					<EventListener
						target="window"
						onScroll={this.handleScroll}
					/>
				)}
				{children}
			</header>
		)
	}
}

AppBar.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	position: PropTypes.oneOf(['fixed', 'absolute', 'static']),
}

AppBar.defaultProps = {
	position: 'fixed',
}

export default AppBar
