import React ,{useState,useEffect}from 'react'
import "../commonResources/youtubevideos/YoutubeVideos.css"

function YoutubeVideos() {
  const[applevideo,setapplevideo]=useState([])

  useEffect(() => {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCeP2K3xL2DAuSPRV7-42LGc5h9pwA7wcM"
      )
        .then((response) => response.json())
        .then((data) => {
          setapplevideo(data.items);
        })
        .catch((error) => {
          console.log("there is an error");
        });
  },[])

   

 console.log(applevideo);

  return (
    <>
      <div className="vid">
        {applevideo.map((video) => (
          <div key={video.id.videoId}>
            <div className="thumbnail">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
            </div>
            <div className="description">
              <h5>
                {" "}
                <a href="">{video.snippet.title}</a>
              </h5>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default YoutubeVideos