import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import Column from './'

const stories = storiesOf('Components/Column', module)

const createKnobs = () => ({
	variant: select(
		'variant',
		{
			none: 'none',
			sm: 'sm',
			md: 'md',
			lg: 'lg',
		},
		'none',
	),
	size: select(
		'size',
		{
			none: 'none',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
		},
		'none',
	),
})

export const Default = () => (
	<Column {...createKnobs()}>
		<div style={{ background: '#f1f1f1', border: '1px solid #dfdfdf' }}>
			{text('children', 'Just a Column')}
		</div>
	</Column>
)

stories.add('Default', Default)

export default Default
