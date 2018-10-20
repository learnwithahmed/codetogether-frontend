import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Typography from '../Typography'
import Header from './'

const stories = storiesOf('Components/Header', module)

export const Default = () => (
  <Header>
    <Typography variant="h1">Schedule</Typography>
    <Typography variant="h5">
      {text(
        'content',
        'Schedule tabs make it easy to explore and switch between different views.',
      )}
    </Typography>
  </Header>
)

stories.add('Default', Default)

export default Default
