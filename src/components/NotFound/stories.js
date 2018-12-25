import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import Button from '../Button'
import NotFound from './'

const stories = storiesOf('1. Components/NotFound', module)

export const Default = () => (
	<NotFound>
		<Typography variant="h2">Oh snap! 404&hellip;</Typography>
		<Typography variant="h6">
			Meet the monkey, Our engineer! He’s really not sure how you landed here!
		</Typography>
		<p style={{ paddingTop: 24, marginTop: 24 }}>
			<Button color="primary" href="index.html">
				Go back to home
			</Button>
		</p>
	</NotFound>
)

stories.add('Default', Default)

export default Default
