import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Burger from '.'

const stories = storiesOf('Components/Burger', module)

export const Default = () => (
  <Burger close={boolean('close', false)} style={{ margin: 100 }} />
)

stories.add('Default', Default)

export default Default
