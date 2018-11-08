import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.module.scss'

class AppBase extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.appBarRef = React.createRef()
	}

	componentDidMount() {
		window.addEventListener('scroll', event => {
			let supportPageOffset = window.pageXOffset !== undefined
			let isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'
			let scroll = {
				x: supportPageOffset
					? window.pageXOffset
					: isCSS1Compat
						? document.documentElement.scrollLeft
						: document.body.scrollLeft,
				y: supportPageOffset
					? window.pageYOffset
					: isCSS1Compat
						? document.documentElement.scrollTop
						: document.body.scrollTop,
			}

			if (scroll.y > 1000) {
				// 3000px (arbitrary - put whatever point you need there.)
				console.log(scroll.y)
			}
		})
	}

	componentWillUnmount() {
		window.removeEventListener('scroll')
	}

	render() {
		const { className, children, ...other } = this.props

		return <h1>AppBase</h1>
	}
}

AppBase.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
}

export default AppBase
