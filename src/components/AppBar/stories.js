import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Typography from '../Typography'
import CrossOne from '../icons/Cross'
import List from '../List'
import IconButton from '../IconButton'
import Button from '../Button'
import Toolbar from '../Toolbar'
import Container from '../Container'
import Column from '../Column'
import Row from '../Row'
import AppBar from '.'

const stories = storiesOf('Components/AppBar', module)

export const Default = () => (
	<div style={{ height: '100vh', background: '#eee' }}>
		<AppBar
			color={select(
				'color',
				{
					inherit: 'inherit',
					default: 'default',
				},
				'default',
			)}
			position={select(
				'position',
				{
					fixed: 'fixed',
					absolute: 'absolute',
					static: 'static',
				},
				'fixed',
			)}
		>
			<Toolbar>
				<Container>
					<Row>
						<Column size="12">
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div style={{ flex: 2 }}>
									<IconButton>
										<Typography variant="h4">
											CodeTogether
										</Typography>
									</IconButton>
								</div>

								<List>
									{Array.from(new Array(8), (val, i) => (
										<a href="#" key={i}>
											Item
										</a>
									))}
								</List>

								<div
									style={{
										padding: '12px 0 12px 48px',
									}}
								>
									<Button color="primary">Signup</Button>
								</div>
							</div>
						</Column>
					</Row>
				</Container>
			</Toolbar>
		</AppBar>
	</div>
)

stories.add('Default', Default)

export default Default
