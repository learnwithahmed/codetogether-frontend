import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ButtonBase from '../ButtonBase'
import styles from './ClipCardLink.module.scss'

const ClipCardLink = props => {
	const { children, className, ...other } = props
	return <ButtonBase component="a" className={classnames(styles.root, className)} {...other} />
}

ClipCardLink.propTypes = {
	className: PropTypes.string,
}

export default ClipCardLink
