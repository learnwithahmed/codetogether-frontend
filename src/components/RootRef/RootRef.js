import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { setRef } from '../utils/helpers'

class RootRef extends React.Component {
	componentDidMount() {
		this.ref = ReactDOM.findDOMNode(this)
		setRef(this.props.rootRef, this.ref)
	}

	componentDidUpdate(prevProps) {
		const ref = ReactDOM.findDOMNode(this)

		if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
			if (prevProps.rootRef !== this.props.rootRef) {
				setRef(prevProps.rootRef, null)
			}

			this.ref = ref
			setRef(this.props.rootRef, this.ref)
		}
	}

	componentWillUnmount() {
		this.ref = null
		setRef(this.props.rootRef, null)
	}

	render() {
		return this.props.children
	}
}

RootRef.propTypes = {
	children: PropTypes.element.isRequired,
	rootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
}

export default RootRef
