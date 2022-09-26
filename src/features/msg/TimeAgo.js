import {parseISO, formatDistanceToNow } from 'date-fns'

import React from 'react'

const TimeAgo = ({timestamp}) => {
    let timeAgo = ''
    if(timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} `
    }
  return (
    <span className='time-span' title={timestamp}>
        &nbsp; <i className='time'>{timeAgo}</i>

    </span>
  )
}

export default TimeAgo