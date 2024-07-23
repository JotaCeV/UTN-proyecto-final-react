import videoSource from "../../assets/historia-Comp.mp4";
import posterImg from "../../assets/video-poster.jpg";
import { useEffect, useRef, useState } from "react";
import "./videoplayer-styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

function VideoPlayer() {
  // ESTADOS

  const videoRef = useRef(null);
  const [isPLaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState("");
  const [durationVideoTime, setDurationVideoTime] = useState("");

  // FUNCIONES

  const parseTime = (time) => {
    let timeSec = Math.floor(time % 60);
    let timeMin = Math.floor((time / 60) % 60);
    let timeHour = Math.floor(time / 3600);

    return timeHour
      ? `${timeHour}:${timeMin < 10 ? `0${timeMin}` : timeMin}:${
          timeSec < 10 ? `0${timeSec}` : timeSec
        }`
      : `${timeMin}:${timeSec < 10 ? `0${timeSec}` : timeSec}`;
  };

  const handleLoadedMetadata = () => {
    setIsVideoLoaded(true);
    setCurrentVideoTime(parseTime(videoRef.current.currentTime));
    setDurationVideoTime(parseTime(videoRef.current.duration));
  };

  const handleProgress = () => {
    setCurrentVideoTime(parseTime(videoRef.current.currentTime));
  };

  // EVENTOS

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener("timeupdate", handleProgress);
    }

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("timeupdate", handleProgress);
    };
  }, []);

  const playVideoHandler = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideoHandler = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={videoSource}
        preload="metadata"
        poster={posterImg}
      />
      <div className="custom-controls">
        {isPLaying ? (
          <button onClick={() => pauseVideoHandler()}>
            <FaPause />
          </button>
        ) : (
          <button onClick={() => playVideoHandler()}>
            <FaPlay />
          </button>
        )}
        <div className="video-time">
          {isVideoLoaded ? `${currentVideoTime} / ${durationVideoTime}` : ""}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
