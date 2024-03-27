import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    // console.log(response);
    setVideos(response.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
    
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
