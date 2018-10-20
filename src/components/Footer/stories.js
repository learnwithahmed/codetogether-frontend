import React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from '../Typography'
import List from '../List'
import Footer from './'

const stories = storiesOf('Components/Footer', module)

export const Default = () => (
  <Footer>
    {Array.from(new Array(4), (val, i) => (
      <div
        style={{
          marginBottom: '24px',
          paddingRight: 15,
          paddingLeft: 15,
          maxWidth: '16.66667%',
          flex: '0 0 16.66667%',
        }}
        key={i}
      >
        <Typography variant="h6">Follow us</Typography>
        <List>
          <a href="#Twitter">Twitter</a>
          <a href="#Facebook">Facebook</a>
          <a href="#Instagram">Instagram</a>
        </List>
      </div>
    ))}
  </Footer>
)

stories.add('Default', Default)

export default Default
