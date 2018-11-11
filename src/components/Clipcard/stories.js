import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import Grid from '../Grid'
import ClipCardLink from '../ClipCardLink'
import ClipCardBody from '../ClipCardBody'

const stories = storiesOf('1. Components/ClipCard', module)

export const Default = () => (
	<React.Fragment>
		<Grid container alignItems="center">
			<Grid xs={12} md={2} lg={1}>
				<Typography
					variant="body3"
					style={{ paddingTop: 12, marginBottom: 0 }}
				>
					16:30
				</Typography>
			</Grid>
			<Grid xs={12} md={10} lg={11}>
				<ClipCardBody>
					<ClipCardLink />
					<Typography component="span" variant="subtitle2">
						Online Workshop — 2 Hours
					</Typography>
					<Typography variant="h6">
						Into to Docker Fundamental
					</Typography>
					<Typography component="span" variant="subtitle2">
						By Ahmed Abdulrahman
					</Typography>
				</ClipCardBody>
			</Grid>
		</Grid>
		<Grid container alignItems="center">
			<Grid xs={12} md={2} lg={1}>
				<Typography
					variant="body3"
					style={{ paddingTop: 12, marginBottom: 0 }}
				>
					20:30
				</Typography>
			</Grid>
			<Grid xs={12} md={10} lg={11}>
				<ClipCardBody>
					<ClipCardLink />
					<Typography component="span" variant="subtitle2">
						Online Workshop — 1 Hours
					</Typography>
					<Typography variant="h6">React Declarative DOM</Typography>
					<Typography component="span" variant="subtitle2">
						By Ahmed Abdulrahman
					</Typography>
				</ClipCardBody>
			</Grid>
		</Grid>
	</React.Fragment>
)
stories.add('Default', Default)

export default Default
