import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

const Banner = props => {
  const { className, ...other } = props
  return (
    <div className={className} {...other}>
      <Typography variant="h5">
        <span>Grow your competence at CodeTogether</span>
      </Typography>
      <Typography component="h1">
        <span>Learn</span>
        <br />
        <span>& Create & Share</span>
      </Typography>
    </div>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
}

export default Banner
