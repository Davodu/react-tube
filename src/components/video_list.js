import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props)=>{
    //build array of components
    const videoItems = props.videos.map((item)=>{
        return(
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key = {item.etag }
                video = {item} />
            )
    })

    //array of list items will be rendered as list items
    return (
       <ul className = "col-md-4 col-sm-8 list-group">

           {videoItems}
       </ul>
    );
}

export default VideoList;