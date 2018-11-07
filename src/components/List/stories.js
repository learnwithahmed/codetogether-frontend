import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './'

const stories = storiesOf('Components/List', module)

export const Default = () => (
	<List>
		{Array.from(new Array(8), (val, i) => (
			<span key={i}>Item</span>
		))}
	</List>
)

stories.add('Default', Default)

export default Default
