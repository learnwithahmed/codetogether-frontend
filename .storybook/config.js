import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import '../src/components/styles/main.module.scss'

const components = require.context('../src/components', true, /\/stories\.js$/)

function loadStories() {
  components.keys().forEach(filename => components(filename))
}

setOptions({
  name: 'CT Styleguide',
  sortStoriesByKind: true,
})

addDecorator(withKnobs)

configure(loadStories, module);
