import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import CrossIcon from '../icons/Cross'
import IconButton from '.'

const stories = storiesOf('1. Components/IconButton', module)

export const Default = () => (
	<IconButton disabled={boolean('disabled', false)}>
		<CrossIcon />
	</IconButton>
)

stories.add('Default', Default)

export default Default
