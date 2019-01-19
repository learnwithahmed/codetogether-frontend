import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Media from '../../components/Media'
import Typography from '../../components/Typography'
import SeriesItem from './'

const stories = storiesOf('1. Components/SeriesItem', module)

export const Default = () => (
	<SeriesItem>
		<div class="series-video-list-img">
			<a href="#">
				<Media
					component="img"
					src="//placekitten.com/g/300/300"
					alt={text('alt', 'Building grid layout')}
				/>
			</a>
		</div>
		<div class="series-video-list-description">
			<small>
				<a href="#">
					<strong>Episode</strong> 01
				</a>
				•<strong>Duration</strong> 34:19
			</small>
			<Typography variant="h3">
				<a href="#">{text('title', 'How Subsets of an Immutable.js Map() works')}</a>
			</Typography>
			<Typography variant="body1">
				{text(
					'description',
					'In this mini-series Im going to try and create website using Gatsby.js and WordPress.',
				)}
			</Typography>
		</div>
	</SeriesItem>
)

stories.add('Default', Default)

export default Default
