import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Tab from './'

const stories = storiesOf('Components/Tab', module)

export const Default = () => (
  <Tab
    indicatorColor={select(
      'indicatorColor',
      {
        default: 'default',
        primary: 'primary',
        secondary: 'secondary',
      },
      'default',
    )}
    selected={boolean('selected', false)}
    disabled={boolean('disabled', false)}
    mini={boolean('mini', false)}
  >
    {text('children', 'Day 1')}
  </Tab>
)

stories.add('Default', Default)

export default Default
