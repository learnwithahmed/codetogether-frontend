import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Grid from './Grid'

const stories = storiesOf('Components/Grid', module)

export const justifyOptions = [
	'flex-start',
	'center',
	'flex-end',
	'space-between',
	'space-around',
	'space-evenly',
]

export const alignItemsOptions = [
	'flex-start',
	'center',
	'flex-end',
	'stretch',
	'baseline',
]

export const alignContentOptions = [
	'stretch',
	'center',
	'flex-start',
	'flex-end',
	'space-between',
	'space-around',
]
export const directionOptions = [
	'row',
	'row-reverse',
	'column',
	'column-reverse',
]

export const wrapOptions = ['nowrap', 'wrap', 'wrap-reverse']

export const breakpointOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const spacingOptions = [0, 8, 16, 24, 32, 40]

export const createContainerKnobs = () => ({
	justify: select('justify', justifyOptions, 'flex-start'),
	alignItems: select('alignItems', alignItemsOptions, 'stretch'),
	alignContent: select('alignContent', alignContentOptions, 'stretch'),
	direction: select('direction', directionOptions, 'row'),
	wrap: select('wrap', wrapOptions, 'wrap'),
	spacing: select('spacing', spacingOptions, 0),
})

export const createItemKnobs = () => ({
	xs: select('xs', breakpointOptions, 'auto'),
	sm: select('sm', breakpointOptions, 'auto'),
	md: select('md', breakpointOptions, 'auto'),
	lg: select('lg', breakpointOptions, 'auto'),
})

export const Default = () => (
	<Grid container {...createContainerKnobs()} style={{ height: '100vh' }}>
		{Array.from(new Array(3), (val, index) => (
			<Grid item {...createItemKnobs()} key={index}>
				<div
					style={{
						padding: 16,
						border: '1px solid rgba(0, 0, 0, 0.2)',
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
