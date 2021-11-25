import React from 'react'
const VideoDetail =({video}) =>{
    if(!video)
    return(
        <div>Loading</div>

    )
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div>
            <div className="ui embed">
                <iframe title = "videop player" src = {videosrc}/>

            </div>

            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            <p style={{textAlign:"center" , backgroundColor:"SlateBlue",color:"wheat"}}>Created By Motiar Rahaman</p>
            <div className="ui-footer">
            <p>Add a Public comment...</p>
            <button className="button">SUBSCRIBE</button>
            </div>
            <hr/>
            <div className="ui-button">
            <a className="ui-cancel">CANCEL</a>
            <a className="ui-comment">COMMENT</a>
            
            </div>

        </div>
        
    );
};
export default VideoDetail;