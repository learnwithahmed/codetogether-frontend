import React from 'react'
import { storiesOf } from '@storybook/react'
import Banner from './'

const stories = storiesOf('Components/Banner', module)

export const Default = () => (
    <Banner />
)

stories.add('Default', Default)

export default Default
