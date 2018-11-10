import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Typography from '../Typography'
import CrossOne from '../icons/Cross'
import AppBarMenu from '../AppBarMenu'
import IconButton from '../IconButton'
import Button from '../Button'
import Toolbar from '../Toolbar'
import Container from '../Container'
import Grid from '../Grid'
import AppBar from '.'

const stories = storiesOf('Components/AppBar', module)
export const colorOptions = ['inherit', 'default']
export const positionOptions = ['fixed', 'absolute', 'static']

export const createKnobs = () => ({
	color: select('color', colorOptions, 'default'),
	position: select('position', positionOptions, 'fixed'),
})

export const Default = () => (
	<div style={{ height: '100vh', background: '#eee' }}>
		<AppBar {...createKnobs()}>
			<Toolbar>
				<Container>
					<Grid container alignItems="center" xs={12} xl={12}>
						<div style={{ flex: 2 }}>
							<IconButton>CodeTogether</IconButton>
						</div>
						<div
							style={{
								flexGrow: 3,
								flexShrink: 2,
								textAlign: 'right',
							}}
						>
							<AppBarMenu>
								{Array.from(new Array(8), (val, index) => (
									<a href="#" key={index}>
										Item
									</a>
								))}
							</AppBarMenu>
						</div>

						<div
							style={{
								padding: '12px 0 12px 48px',
							}}
						>
							<Button color="primary">Signup</Button>
						</div>
					</Grid>
				</Container>
			</Toolbar>
		</AppBar>
	</div>
)

stories.add('Default', Default)

export default Default
