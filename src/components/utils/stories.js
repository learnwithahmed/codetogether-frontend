import React from 'react'
import PropTypes from 'prop-types'

/*
Example usage:

import { withState } from 'utils/stories'

const initialState = {
    disabled: false,
}

const Story = withState(setState => state => (
    <button
        onClick={() => setState({ disabled: true })}
        disabled={state.disabled}
    >
        Click me
    </button>
), initialState)
*/

export class Story extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = props.initialState
    this.component = props.setState(this.setState.bind(this))
  }

  render() {
    return this.component(this.state)
  }
}

Story.propTypes = {
  initialState: PropTypes.object,
  setState: PropTypes.func.isRequired,
}

Story.defaultProps = {
  initialState: {},
}

export const withState = (setState, initialState) => () => (
  <Story initialState={initialState} setState={setState} />
)

export default withState
