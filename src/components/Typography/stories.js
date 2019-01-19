import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Typography from './'

export const createKnobs = () => ({
	paragraph: boolean('paragraph', false),
})

const stories = storiesOf('1. Components/Typography', module)

export const Default = () => (
	<div>
		<Typography variant="display1" component="h1">
			Bold 112px
		</Typography>
		<Typography variant="h1">Bold 56px</Typography>
		<Typography variant="h2">Bold 45px</Typography>
		<Typography variant="h3">Bold 34px</Typography>
		<Typography variant="h4">Bold 24px</Typography>
		<Typography variant="h5">Bold 20px</Typography>
		<Typography variant="h6">Bold 16px</Typography>
		<Typography variant="cite">CITE 12PX. Lorem ipsum dolor sit amet</Typography>
		<Typography variant="subtitle1">
			BOLD 12PX. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
			tenetur
		</Typography>
		<Typography variant="subtitle2">
			REGULAR 11PX. subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
			blanditiis tenetur
		</Typography>
		<Typography variant="body1">
			Body1 - Regular 16px . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
			blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
			doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
			quibusdam.
		</Typography>
		<Typography variant="body2">
			Body2 - Bold 16px . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
			blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
			doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
			quibusdam.
		</Typography>
		<Typography variant="body3">
			Body3 - Regular 14px . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
			blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
			doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
			quibusdam.
		</Typography>
	</div>
)

stories.add('Default', Default)

export default Default
