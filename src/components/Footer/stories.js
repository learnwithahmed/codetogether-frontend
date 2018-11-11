import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import List from '../List'
import Grid from '../Grid'
import Container from '../Container'
import Footer from './'

const stories = storiesOf('1. Components/Footer', module)

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
				<Grid container>
					<Grid xs={12} md={4} xl={2}>
						<Typography variant="h6">Contact</Typography>
						<List>
							<a href="#Twitter">info@ct.com</a>
							<a href="#Facebook">Be a sponsor</a>
						</List>
					</Grid>
					<Grid xs={12} md={4} xl={2}>
						<Typography variant="h6">Follow Us</Typography>
						<List>
							<a href="#Twitter">Twitter</a>
							<a href="#Facebook">Facebook</a>
							<a href="#Instagram">Instagram</a>
						</List>
					</Grid>
					<Grid xs={12} md={4} lg={4} xl={2}>
						<Typography variant="h6">Legal Terms</Typography>
						<List>
							<a href="#Twitter">Policy</a>
							<a href="#Facebook">Code of Conduct</a>
						</List>
					</Grid>
				</Grid>
			</Container>
		</div>
	</Footer>
)

stories.add('Default', Default)

export default Default
