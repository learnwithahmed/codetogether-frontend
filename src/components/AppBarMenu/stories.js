import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBarMenu from './'

const stories = storiesOf('Components/AppBarMenu', module)

export const Default = () => (
	<AppBarMenu>
		{Array.from(new Array(8), (val, index) => (
			<a href="#" key={index}>
				Item
			</a>
		))}
	</AppBarMenu>
)

stories.add('Default', Default)

export default Default
