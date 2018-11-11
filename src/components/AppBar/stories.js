import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import AppBarMenu from '../AppBarMenu'
import IconButton from '../IconButton'
import Button from '../Button'
import Toolbar from '../Toolbar'
import Container from '../Container'
import Grid from '../Grid'
import AppBar from '.'

const stories = storiesOf('1. Components/AppBar', module)
export const colorOptions = ['inherit', 'default']
export const positionOptions = ['fixed', 'absolute', 'static']

export const createKnobs = () => ({
	color: select('color', colorOptions, 'default'),
	position: select('position', positionOptions, 'fixed'),
})

export const Default = () => (
	<div style={{ height: '100vh', background: '#eee' }}>
		<AppBar {...createKnobs()} style={{ background: '#fff' }}>
			<Toolbar>
				<Container>
					<Grid
						container
						alignItems="center"
						style={{ minHeight: 68 }}
					>
						<Grid xs={10} md={2}>
							<IconButton>CodeTogether</IconButton>
						</Grid>

						<Grid xs={10} md={8} style={{ textAlign: 'right' }}>
							<AppBarMenu>
								<a href="#">About</a>
								<a href="#">Schedule</a>
								<a href="#">Team</a>
								<a href="#">Get in Touch</a>
							</AppBarMenu>
						</Grid>

						<Grid md={1} style={{ paddingLeft: 20 }}>
							<Button color="primary">Signup</Button>
						</Grid>
					</Grid>
				</Container>
			</Toolbar>
		</AppBar>
	</div>
)

stories.add('Default', Default)

export default Default
