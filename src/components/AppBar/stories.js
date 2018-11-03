import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Burger from '../icons/Burger'
import CrossOne from '../icons/Cross'
import CrossTwo from '../icons/Cross'
import IconButton from '../IconButton'
import Toolbar from '../Toolbar'
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
				<IconButton>
					<Burger />
				</IconButton>

				<div style={{ flexGrow: 1, textAlign: 'center' }}>
					<IconButton>
						<CrossOne />
					</IconButton>
				</div>
				<IconButton>
					<CrossTwo />
				</IconButton>
			</Toolbar>
		</AppBar>
	</div>
)

stories.add('Default', Default)

export default Default
