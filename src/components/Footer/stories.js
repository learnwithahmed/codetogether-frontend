import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Footer from './'

const stories = storiesOf('Components/Footer', module)

export const Default = () => (
    <Footer>
      {text('children', 'Just a Footer')}
    </Footer>
)

stories.add('Default', Default)

export default Default
