import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Media from '../Media'
import Typography from '../Typography'
import Card from './'

const stories = storiesOf('1. Components/Card', module)

export const Default = () => (
	<Card>
		<Media
			component="img"
			src="//placekitten.com/g/300/300"
			alt={text('alt', 'Building grid layout')}
			style={{ minHeight: 100, width: 500 }}
		/>
		<Typography variant="h5" color="inherit">
			{text('title', 'Building grid layout')}
		</Typography>
		<Typography variant="body3" color="inherit">
			{text('total', '3 VIDEOS')}
		</Typography>
		<Typography variant="body1" color="inherit">
			{text(
				'description',
				'Ad consectetur duis excepteur pariatur Lorem eu reprehenderit ex labore ea incididunt adipisicing magna. Consectetur do et dolore consectetur sit incididunt nostrud quis commodo ut culpa ullamco Lorem voluptate. Cupidatat nostrud ea nostrud non adipisicing tempor Lorem. Minim cillum officia esse Lorem.',
			)}
		</Typography>
		<a href="#">View Course</a>
	</Card>
)

stories.add('Default', Default)

export default Default
