import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import BurgerIcon from '../icons/Burger'
import CrossIcon from '../icons/Cross'
import ArrowLeftIcon from '../icons/ArrowLeft'
import styles from './Burger.module.scss'

const Burger = props => {
	const { className, close, back, ...other } = props

	return (
		<div
			className={classnames(
				styles.root,
				{
					[styles.idle]: !back && !close,
					[styles.back]: back,
					[styles.close]: close,
				},
				className,
			)}
			{...other}
		>
			<BurgerIcon className={classnames(styles.icon, styles.burgerIcon)} />
			<CrossIcon className={classnames(styles.icon, styles.crossIcon)} />
			<ArrowLeftIcon className={classnames(styles.icon, styles.backIcon)} />
		</div>
	)
}

Burger.propTypes = {
	className: PropTypes.string,
	close: PropTypes.bool,
	back: PropTypes.bool,
}

Burger.defaultProps = {
	back: false,
	close: false,
}

export default Burger
