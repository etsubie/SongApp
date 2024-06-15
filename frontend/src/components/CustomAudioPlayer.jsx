import React, { useState, useRef } from 'react';
import {
  AudioPlayerContainer,
  AudioControls,
  PlayButton,
  ProgressBar,
} from '../Styles/AudioPlayerStyles';

const CustomAudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <AudioPlayerContainer>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <AudioControls>
        <PlayButton onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </PlayButton>
        {formatTime(currentTime)}
        <ProgressBar
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
        />
 {formatTime(duration)}
      </AudioControls>
    </AudioPlayerContainer>
  );
};

export default CustomAudioPlayer;
