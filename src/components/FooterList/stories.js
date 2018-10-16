import React from 'react'
import { storiesOf } from '@storybook/react'
import FooterList from './'

const stories = storiesOf('Components/FooterList', module)

export const Default = () => (
    <FooterList>
        {Array.from(new Array(5), (val, index) => (
          <li key={index}><a href="#">Link</a></li>
        ))}
    </FooterList>
)

stories.add('Default', Default)

export default Default
