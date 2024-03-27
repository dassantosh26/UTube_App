import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-3 m-3 w-80 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnails" />
      <ul>
        <li className="font-semibold py-2">{title}</li>
        <li className="font-bold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
