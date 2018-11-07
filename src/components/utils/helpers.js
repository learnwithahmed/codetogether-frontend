export function capitalize(string) {
	if (typeof string !== 'string') {
		throw new Error('UI: capitalize(string) expects a string argument.')
	}

	return string.charAt(0).toUpperCase() + string.slice(1)
}

export function setRef(ref, value) {
	if (typeof ref === 'function') {
		ref(value)
	} else if (ref) {
		ref.current = value
	}
}
