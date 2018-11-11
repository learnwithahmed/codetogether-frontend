import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Burger from '.'

const stories = storiesOf('1. Components/Burger', module)

export const Default = () => (
	<Burger
		close={boolean('close', false)}
		back={boolean('back', false)}
		style={{ margin: 30 }}
	/>
)

stories.add('Default', Default)

export default Default
