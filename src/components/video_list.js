import React from 'react';
import VideoListItem from './video_list_item'
// Passing in the props into the arrow function, takes the props passed in from the parent component , which in this case was videos
const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video}
            />
        )
    })
    return(
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    )
}

export default VideoList;

//When working with a list, all list items must have a key to differentiate index   