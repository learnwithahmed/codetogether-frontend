import React from 'react'
import { storiesOf } from '@storybook/react'
import MonkeyIcon from '../icons/Monkey'
import SquigglyIcon from '../icons/Squiggly'
import NotFound from './'

const stories = storiesOf('Components/NotFound', module)

export const Default = () => (
    <NotFound>
      <MonkeyIcon/>
      <SquigglyIcon/>
      <h2>Oh snap! 404&hellip;</h2>
      <h6>Meet the monkey, Our engineer! He’s really not sure how you landed here!</h6>
      <p>
        <a href="index.html">Go back to home</a>
      </p>
    </NotFound>
)

stories.add('Default', Default)

export default Default
