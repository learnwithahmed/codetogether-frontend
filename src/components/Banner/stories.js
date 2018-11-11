import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import Banner from './'

const stories = storiesOf('1. Components/Banner', module)

export const Default = () => (
	<Banner>
		<Typography variant="h5">
			<span>Grow your competence at CodeTogether</span>
		</Typography>
		<Typography component="h1" variant="display1">
			<span>Learn</span>
			<br />
			<span>& Create & Share</span>
		</Typography>
	</Banner>
)

stories.add('Default', Default)

export default Default
