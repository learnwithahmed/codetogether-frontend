import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from './Grid'

const stories = storiesOf('Components/Grid', module)

export const Default = () => (
	<Grid container spacing={24}>
		<Grid item xs={12}>
			<div>xs=12</div>
		</Grid>
		<Grid item xs={12} sm={6}>
			<div>xs=12 sm=6</div>
		</Grid>
		<Grid item xs={12} sm={6}>
			<div>xs=12 sm=6</div>
		</Grid>
		<Grid item xs={6} sm={3}>
			<div>xs=6 sm=3</div>
		</Grid>
		<Grid item xs={6} sm={3}>
			<div>xs=6 sm=3</div>
		</Grid>
		<Grid item xs={6} sm={3}>
			<div>xs=6 sm=3</div>
		</Grid>
		<Grid item xs={6} sm={3}>
			<div>xs=6 sm=3</div>
		</Grid>
	</Grid>
)

stories.add('Default', Default)

export default Default
