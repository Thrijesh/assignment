import React from 'react'

import './style.scss'

function Box({ data }) {

    // SLICING TITLE AND DESCRIPTION
    const silceTitle = data?.snippet?.title && data?.snippet?.title.length > 45 ? data?.snippet?.title.slice(0, 45) + '...' : data?.snippet?.title
    const silceDesc = data?.snippet?.description && data?.snippet?.description.length > 80 ? data?.snippet?.description.slice(0, 80) + '...' : data?.snippet?.description

    return (
        <div className='Box'>
            <img src={data?.snippet?.thumbnails?.medium?.url} alt='video-thumbnail' className='thumbnail' />
            <h5 className='title'>{silceTitle}</h5>
            <p className='description'>{silceDesc}</p>
        </div>
    )
}

export default Box