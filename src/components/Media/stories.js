import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import Media from './'

const stories = storiesOf('1. Components/Media', module)

const sources = {
	xs: '//placekitten.com/g/300/300',
	sm: '//placekitten.com/g/400/400',
	md: '//placekitten.com/g/500/500',
}
// Demo videos
// const sources2 = {
// 	xs: 'https://storage.googleapis.com/coverr-main/mp4/Bath-time.mp4',
// 	sm: 'https://staging.coverr.co/s3/mp4/clothing.mp4',
// }

export const Default = () => (
	<Media
		component={select(
			'component',
			['audio', 'div', 'iframe', 'img', 'picture', 'video'],
			'div',
		)}
		src={sources}
		alt={text('alt', 'Just another img alt attribute')}
		style={{ minHeight: 100 }}
	/>
)

stories.add('Default', Default)

export default Default
