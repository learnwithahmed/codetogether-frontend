/* eslint-disable react/prop-types */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import { withState, Story } from '../utils/stories'
import Tab from '../Tab'
import TabPanel from '../TabPanel'
import Tabs from './'

const stories = storiesOf('Components/Tabs', module)

const initialState = { value: 0 }

export const Default = withState(
	setState => state => (
		<div>
			<Tabs
				indicatorColor={select(
					'indicatorColor',
					{
						default: 'default',
						primary: 'primary',
						secondary: 'secondary',
					},
					'default',
				)}
				centered={boolean('centered', false)}
				fullWidth={boolean('fullWidth', false)}
				mini={boolean('mini', false)}
				value={state.value}
				onChange={(event, value) => setState({ value })}
			>
				<Tab>Day 1</Tab>
				<Tab>Day 2</Tab>
				<Tab>Day 3</Tab>
			</Tabs>

			{state.value === 0 && <TabPanel>TabPanel 1</TabPanel>}
			{state.value === 1 && <TabPanel>TabPanel 2</TabPanel>}
			{state.value === 2 && <TabPanel>TabPanel 3</TabPanel>}
		</div>
	),
	initialState,
)

stories.add('Default', Default)

export default Default
