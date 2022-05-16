import React from 'react'
import { useSelector } from 'react-redux'
import Box from './box'

function VideoContainer() {

    const state = useSelector(state => state.api.apiResponseData)
    return (
        <div className='videoContainer'>
            {
                state && state.map(video => <Box key={video.id.videoId || video.id.channelId} data={video} />)
            }
        </div>
    )
}

export default VideoContainer