import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { createPictureChildren } from './manageChildren'
import styles from './Media.module.scss'

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img']

const Media = props => {
	const { alt, className, component: Component, image, src: srcProp, style, ...other } = props

	const isImgComponent = Component === 'img'
	const isPictureComponent = Component === 'picture'
	const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1

	let src = srcProp
	if (typeof srcProp === 'object') {
		src = srcProp.xs

		if (isPictureComponent) {
			other.children = createPictureChildren(srcProp, alt)
		}
	}

	const composedStyle =
		!isMediaComponent && src ? { backgroundImage: `url("${src}")`, ...style } : style

	return (
		<Component
			className={classNames(
				styles.root,
				{
					[styles.media]: isMediaComponent,
					[styles.picture]: isPictureComponent,
				},
				className,
			)}
			style={composedStyle}
			src={isMediaComponent ? src : undefined}
			alt={isImgComponent ? alt : undefined}
			{...other}
		/>
	)
}

Media.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
	image: PropTypes.string,
	src: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			xs: PropTypes.string.isRequired,
			sm: PropTypes.string,
			md: PropTypes.string,
			lg: PropTypes.string,
			xl: PropTypes.string,
		}),
	]),
	style: PropTypes.object,
}

Media.defaultProps = {
	component: 'div',
}

export default Media
