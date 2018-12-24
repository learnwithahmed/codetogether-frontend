import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Svg from '.'

const stories = storiesOf('1. Components/Icons', module)

export const Default = () => (
	<div>
		<Svg.ArrowLeft />
		<Svg.Burger />
		<Svg.Cross />
		<Svg.Heart />
		<Svg.Mind />
		<Svg.Dislike />
	</div>
)

stories.add('Default', Default)

export default Default
