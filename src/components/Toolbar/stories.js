import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Toolbar from '.'

const stories = storiesOf('Components/Toolbar', module)

export const Default = () => (
  <Toolbar
    disableGutters={boolean('disableGutters', false)}
    variant={select(
      'variant',
      {
        regular: 'regular',
        dense: 'dense',
      },
      'regular',
    )}
  >
    <button type="button">Burger</button>

    <div style={{ flexGrow: 1, textAlign: 'center' }}>
      <img src="//placekitten.com/g/120/30" />
    </div>

    <button type="button">Log in</button>
  </Toolbar>
)

stories.add('Default', Default)

export default Default
