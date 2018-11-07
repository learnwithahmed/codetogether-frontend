import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import List from '../List'
import Row from '../Row'
import Container from '../Container'
import Column from '../Column'
import Footer from './'

const stories = storiesOf('Components/Footer', module)

export const Default = () => (
	<Footer>
		<div
			style={{
				paddingTop: 72,
				paddingBottom: 72,
				backgroundColor: '#eff0f1',
			}}
		>
			<Container>
				<Row>
					{Array.from(new Array(4), (val, i) => (
						<Column variant="large" size="3" key={i}>
							<Typography variant="h6">Follow us</Typography>
							<List>
								<a href="#Twitter">Twitter</a>
								<a href="#Facebook">Facebook</a>
								<a href="#Instagram">Instagram</a>
							</List>
						</Column>
					))}
				</Row>
			</Container>
		</div>
	</Footer>
)

stories.add('Default', Default)

export default Default
