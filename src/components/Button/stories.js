import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import Button from '.'

const stories = storiesOf('1. Components/Button', module)

export const Default = () => (
	<Button
		color={select(
			'color',
			{
				default: 'default',
				primary: 'primary',
				secondary: 'secondary',
			},
			'default',
		)}
		size={select(
			'size',
			{
				small: 'small',
				medium: 'medium',
				large: 'large',
			},
			'medium',
		)}
	>
		{text('children', 'Just a button')}
	</Button>
)

stories.add('Default', Default)

export default Default
