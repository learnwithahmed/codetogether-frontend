import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Typography from '../Typography'
import PageHeader from './'

const stories = storiesOf('1. Components/PageHeader', module)

export const Default = () => (
	<PageHeader>
		<Typography variant="h1">Schedule</Typography>
		<Typography variant="h5">
			{text(
				'content',
				'Schedule tabs make it easy to explore and switch between different views.',
			)}
		</Typography>
	</PageHeader>
)

stories.add('Default', Default)

export default Default
