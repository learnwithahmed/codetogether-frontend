import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import classnames from 'classnames'
import styles from './Input.module.scss'

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
		if (this.props.debouncedOnChange) {
			// Debounce is a function that delays invoking until after wait
			// milliseconds have elapsed since the last time the debounced function was invoked.
			// it's a technique to control how many times we allow a function to be executed over time.
			this.debouncedOnChange = debounce(
				value => this.props.debouncedOnChange(value),
				this.props.debounceWait,
			)
		}
	}
	render() {
		const {
			className: classNameProp,
			component,
			debouncedOnChange,
			debounceWait,
			disabled,
			fullWidth,
			inputRef,
			onChange,
			type,
			...other
		} = this.props

		const className = classnames(
			styles.input,
			{
				[styles.disabled]: disabled,
				[styles.fullWidth]: fullWidth,
			},
			classNameProp,
		)

		return React.cloneElement(component, {
			ref: inputRef,
			type,
			disabled,
			onChange: event => {
				// Call both the onChange and debouncedOnChange handler
				onChange(event.target.value)
				if (debouncedOnChange) {
					this.debouncedOnChange(event.target.value)
				}
			},
			className: className,
			...other,
		})
	}
}

// We are using Reactjs PropTypes helper for Runtime type checking for props and similar objects.
Input.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	debouncedOnChange: PropTypes.func,
	disabled: PropTypes.bool,
	fullWidth: PropTypes.bool,
	inputRef: PropTypes.object,
	debounceWait: PropTypes.number,
	type: PropTypes.string,
	component: PropTypes.element,
}

// DefaultProps is a built-in method where we can define our component's default values for props
Input.defaultProps = {
	className: '',
	onChange: () => {},
	debouncedOnChange: null,
	inputRef: this.inputRef,
	debounceWait: 500,
	type: 'text',
	component: <input />,
}

export default Input
