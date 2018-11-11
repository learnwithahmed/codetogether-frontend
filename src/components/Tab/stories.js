import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Typography from '../Typography'
import Tab from '.'

const stories = storiesOf('1. Components/Tab', module)

export const Default = () => (
	<Tab
		indicatorColor={select(
			'indicatorColor',
			{
				default: 'default',
				primary: 'primary',
				secondary: 'secondary',
			},
			'default',
		)}
		selected={boolean('selected', false)}
		disabled={boolean('disabled', false)}
		mini={boolean('mini', false)}
	>
		{text('Time', 'Day 1')}
		<Typography component="span" variant="subtitle2">
			{text('Date', ' — 25 Nov')}
		</Typography>
	</Tab>
)

stories.add('Default', Default)

export default Default
