import React from 'react'

const BREAK_POINTS_VALUES = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
}
const KEYS = ['xs', 'sm', 'md', 'lg', 'xl']

export function createPictureChildren(src, alt) {
	// Do no mutate & reverse order so that largest breakpoint comes first.
	const breakpointsKeys = [...KEYS].reverse()

	return (
		<React.Fragment>
			{breakpointsKeys.map((key, index) => {
				if (!src[key]) {
					return null
				}

				// Smallest asset should be the fallback `img`.
				if (index === breakpointsKeys.length - 1) {
					return <img key={src[key]} src={src[key]} alt={alt} />
				}

				return (
					<source
						key={src[key]}
						media={`(min-width: ${BREAK_POINTS_VALUES[key]}px)`}
						srcSet={src[key]}
					/>
				)
			})}
		</React.Fragment>
	)
}
