import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const videoURL = video.snippet.thumbnails.default.url;
    const videoHeading = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-list">
                    <img  alt="video-thumbnail" className="media-object" src={videoURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{videoHeading}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem