// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { select } from '@storybook/addon-knobs'
// import Column from '../Column'
// import Container from '../Container'
// import Row from './'

// const stories = storiesOf('1. Components/Row', module)

// const createKnobs = () => ({
// 	direction: select(
// 		'direction',
// 		{
// 			row: 'row',
// 			rowReverse: 'rowReverse',
// 			column: 'column',
// 			columnReverse: 'columnReverse',
// 		},
// 		'none',
// 	),
// 	justifyContent: select(
// 		'justifyContent',
// 		{
// 			start: 'start',
// 			center: 'center',
// 			end: 'end',
// 			spaced: 'spaced',
// 			around: 'around',
// 		},
// 		false,
// 	),
// 	alignItems: select(
// 		'alignItems',
// 		{
// 			start: 'start',
// 			center: 'center',
// 			end: 'end',
// 			stretch: 'stretch',
// 			baseline: 'baseline',
// 		},
// 		false,
// 	),
// })

// export const Default = () => (
// 	<Container>
// 		<Row {...createKnobs()}>
// 			<Column>Content 1 goes here</Column>
// 			<Column>Content 2 goes here</Column>
// 			<Column>Content 3 goes here</Column>
// 		</Row>
// 	</Container>
// )

// stories.add('Default', Default)

// export default Default
