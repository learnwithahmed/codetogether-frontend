import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

const Banner = props => {
  const { className, ...other } = props
  return (
    <div className={className} {...other}>
      <Typography>Learn & Create & Share</Typography>
    </div>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
}

export default Banner
