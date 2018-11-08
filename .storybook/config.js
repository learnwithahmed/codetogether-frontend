import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'

import '../src/components/styles/base.module.scss'

const components = require.context('../src/components', true, /\/stories\.js$/)
const containers = require.context('../src/containers', true, /\/stories\.js$/)

function loadStories() {
	components.keys().forEach(filename => components(filename))
	containers.keys().forEach(filename => containers(filename))
}

setOptions({
  name: 'CT Styleguide',
  sortStoriesByKind: true,
})

addDecorator(withKnobs)

configure(loadStories, module);
