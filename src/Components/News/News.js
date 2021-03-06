import React,{ useEffect, useState } from "react";

function News() {
    const [newsItems,getNewsItems] = useState([]);

    useEffect(()=>{
    fetch(
        "http://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=49f333ad9d3e4eaebbff03bdd03f2148"
    )
    .then((response)=> response.json())
    .then((data)=>{
        let articles = data.articles;
        articles= articles.slice(0,6);
        getNewsItems(articles);
    });
    },[]);
 //console.log(newsItems);
return(
    <div className="allarticleWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
               <h1>Latest Articles</h1><br /><br />
                </div>
            </div>
           
            {newsItems.map((singleVideo)=>{
                let url = singleVideo.url;
                
                let videoWrapper = (
                 <div key={url} className="col-sm-12 col-md-6 col-lg-4">
                     <div className="singleNewsWrapper">
                    <div className="newsThumbnail"><a href={url} target="_blank"><img src={singleVideo.urlToImage} /></a></div>
                    <div className="newsInfoWrapper">
                    <div className="newsTitle"><a href={url} target="_blank">{singleVideo.title}</a></div>
                    <div className="newsdesc">{singleVideo.description}</div>
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
export default News;

