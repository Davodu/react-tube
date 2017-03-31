import React from 'react';

const VideoDetail = (props)=>{ //or const VideoDetail = ({video})=>{
    if(!props.video){
        return <div> loading ... </div>
    }
    const video = props.video;
    const videoId = video.id.videoId;
    const videoUrl =  `http://www.youtube.com/embed/${videoId}`

    return (

        <div className="video-detail col-md-8">
            <div class = "jumbotron">

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = {videoUrl}></iframe>
            </div>

            <div className="details">
                <div><b>{video.snippet.title}</b></div>
                <hr />
                <div>{video.snippet.description}</div>
            </div>
        </div>
        </div>
    );
}

export default VideoDetail;