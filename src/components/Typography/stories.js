import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Typography from './'

export const createKnobs = () => ({
  paragraph: boolean('paragraph', false),
})

const stories = storiesOf('Components/Typography', module)

export const Default = () => (
    <div>
      <Typography variant="display4">
        Display 4
      </Typography>
      <Typography variant="display3">
        Display 3
      </Typography>
      <Typography variant="display2">
        Display 2
      </Typography>
      <Typography variant="display1">
        Display 1
      </Typography>
    </div>
)

stories.add('Default', Default)

export default Default
