import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Input from './'

storiesOf('1. Components/Input', module)
	.add('default', () => <Input onChange={action('onChange')} />)
	.add('debounced', () => (
		<Input debouncedOnChange={action('debouncedOnChange')} />
	))
	.add('disabled', () => <Input disabled value="I'm disabled" />)
	.add('textarea', () => <Input component={<textarea />} />)
