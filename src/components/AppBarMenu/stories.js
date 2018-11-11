import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBarMenu from './'

const stories = storiesOf('1. Components/AppBarMenu', module)

export const Default = () => (
	<AppBarMenu style={{ marginTop: 20 }}>
		<a href="#">About</a>
		<a href="#">Schedule</a>
		<a href="#">Team</a>
		<a href="#">Get in Touch</a>
	</AppBarMenu>
)

stories.add('Default', Default)

export default Default
