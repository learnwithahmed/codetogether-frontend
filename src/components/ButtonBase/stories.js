import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import ButtonBase from '.'

const stories = storiesOf('Components/ButtonBase', module)

export const Default = () => (
  <ButtonBase disabled={boolean('disabled', false)}>
    Just a ButtonBase
  </ButtonBase>
)

stories.add('Default', Default)

export default Default
