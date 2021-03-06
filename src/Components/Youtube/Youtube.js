import React,{ useEffect, useState } from "react";

function Youtube() {
    const [youTubeVideos,addVideos] = useState([]);

    useEffect(()=>{
    fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD5ySP5tUVfvKHbYALBaB6fGAJDBpHdteY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
    .then((response)=> response.json())
    .then((data)=>{
        const lee = data.items;
        addVideos(lee);
    });
    },[]);
 //console.log(youTubeVideos);
return(
    <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
               <h1>Latest Videos</h1><br /><br />
                </div>
            </div>
           
            {youTubeVideos?.map((singleVideo)=>{
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

                let videoWrapper = (
                 <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                     <div className="singleVideoWrapper">
                    <div className="videoThumbnail"><a href={vidLink} target="_blank"><img src={singleVideo.snippet.thumbnails.high.url} /></a></div>
                    <div className="videoInfoWrapper">
                    <div className="videoTitle"><a href={vidLink} target="_blank">{singleVideo.snippet.title}</a></div>
                    <div className="videoDesc">{singleVideo.snippet.description}</div>
                 </div>
            </div>
         </div>
                );
                return videoWrapper;
            })}
    </div>
    </div>
    </div>
);
}
export default Youtube;
