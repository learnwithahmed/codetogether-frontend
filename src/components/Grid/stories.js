import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from './Grid'

const stories = storiesOf('1. Components/Grid', module)

export const Default = () => (
	<Grid container spacing={8}>
		{Array.from(new Array(12), (val, index) => (
			<Grid item xs={12} sm={2} md={3} lg={4} xl={3} key={index}>
				<div
					style={{
						padding: 16,
						border: '1px solid rgba(0, 0, 0, 0.2)',
						backgroundColor: '#eaeaf2',
					}}
				>
					{`Cell ${index + 1}`}
				</div>
			</Grid>
		))}
	</Grid>
)

stories.add('Default', Default)

export default Default
