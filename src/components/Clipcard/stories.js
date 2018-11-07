import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import Row from '../Row'
import Column from '../Column'
import ClipCardLink from '../ClipCardLink'
import ClipCardBody from '../ClipCardBody'

const stories = storiesOf('Components/ClipCard', module)

export const Default = () => (
	<React.Fragment>
		<Row>
			<Column size="2">
				<Typography
					variant="body3"
					style={{ paddingTop: 12, marginBottom: 0 }}
				>
					16:30
				</Typography>
			</Column>
			<Column size="10">
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
			</Column>
		</Row>
		<Row>
			<Column size="2">
				<Typography
					variant="body3"
					style={{ paddingTop: 12, marginBottom: 0 }}
				>
					20:30
				</Typography>
			</Column>
			<Column size="10">
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
			</Column>
		</Row>
	</React.Fragment>
)

stories.add('Default', Default)

export default Default
