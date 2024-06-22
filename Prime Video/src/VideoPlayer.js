import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
// import './videoplayer.css';
import a from './godzilla.mp4';
import logo from './amazonlogo.png';

const VideoPlayerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: black;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 100px;
  object-fit: cover;
  margin: 20px;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  margin: 0 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const XRay = styled.div`
  position: absolute;
  top: 30px;
  left: 15px;
  height : 80%;
  color: white;
  width: 280px;
  // height: 450px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  font-family: 'Inter', sans-serif; /* Apply Inter font */
  overflow-y: auto; /* Add vertical scrollbar */
`;

const ProgressBarWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  display: flex;
  align-items: center;
`;

const ProgressBar = styled.input`
  position: relative;
  height: 2px;
  width: 100%;
  background-color: #ccc;
  border-radius: 2px;
  transition: background-color 0.2s ease-in-out;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1px;
    height: 10px;
    opacity: 0;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: ${({ value, max }) => (value / max) * 100}%;
    width: 20px;
    height: 20px;
    top: -10px;
    background-color: white;
    border-radius: 50%;
    transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
    opacity: 0;
  }

  &:hover {
    background-color: #007bff;
    &::after {
      opacity: 1;
    }
  }
`;

const TopRightIcons = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
`;

const Icon = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  margin: 0 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const TimeInfo = styled.div`
  position: absolute;
  bottom: 1px;
  left: 5%;
  color: white;
  font-size: 14px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageDescriptionWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer; /* Add cursor pointer for clickable images */
`;

const ImageDescription = styled.div`
  color: white;
  font-size: 12px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const IMDBBox = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
`;

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [segmentImages, setSegmentImages] = useState([]);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const rewind = () => {
    videoRef.current.currentTime -= 10;
  };

  const fastForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleTimeUpdate = () => {
    const currentSegment = Math.floor(videoRef.current.currentTime / 16) + 1;
    setCurrentTime(videoRef.current.currentTime);
    loadSegmentImages(currentSegment);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    videoRef.current.currentTime = e.target.value;
  };
  const loadSegmentImages = (segment) => {
    const images = [];
    try {
      for (let i = 1; i <= 5; i++) {
        const imgSrc = require(`./segments/segment${segment}/image${i}.jpg`);
        const txtSrc = require(`./segments/segment${segment}/image${i}.txt`);
        const decSrc = require(`./segments/segment${segment}/image${i}_search_term.txt`);
  
        fetch(decSrc)
          .then((response) => response.text())
          .then((text) => {
            // Regular expression to find words (alphanumeric sequences)
            const words = text.match(/\w+/g) || []; // Match all alphanumeric sequences
  
            // Join found words with comma (or any separator)
            const foundWords = words.join(" ");
  
            // Push image details to images array with found words
            images.push({
              imgSrc: imgSrc,
              txtSrc: txtSrc,
              decSrc: foundWords
            });
  
            // Update state with the modified array
            setSegmentImages([...images]);
          })
          .catch((error) => {
            console.error(`Error loading search term for image ${i}`, error);
          });
      }
    } catch (error) {
      console.error(`Error loading images for segment ${segment}`, error);
    }
  };
  

  const openLinkInNewTab = (txtSrc) => {
    fetch(txtSrc)
      .then((response) => response.text())
      .then((text) => {
        window.open(text, '_blank');
      })
      .catch((error) => {
        console.error('Error opening link:', error);
      });
  };

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  // Sample resolution
  const resolution = 'HD 1080p';

  return (
    <VideoPlayerWrapper>
      <StyledVideo ref={videoRef} src={a} controls={false} />
      <XRay>
        <Header>
          <div>X-Ray</div>
          <IMDBBox>IMDb </IMDBBox>
          <div> All  </div>
        </Header>
        <br />
        <Logo src={logo} alt="Logo" />
        <h4>Products Featured in video</h4>
        <ImageContainer>
          {segmentImages.map(({ imgSrc, txtSrc,decSrc }, index) => (
            <ImageDescriptionWrapper key={index}>
              <Image
                src={imgSrc}
                alt={`Segment Image ${index + 1}`}
                onClick={() => openLinkInNewTab(txtSrc)}
              />
              <ImageDescription>{decSrc}</ImageDescription>
            </ImageDescriptionWrapper>
          ))}
        </ImageContainer>
      </XRay>
      <Controls>
        <ButtonGroup>
          <Button onClick={rewind}>&#9664;&#9664; 10</Button>
          <Button onClick={togglePlayPause}>{isPlaying ? '||' : '▶'}</Button>
          <Button onClick={fastForward}>10 &#9654;&#9654;</Button>
        </ButtonGroup>
      </Controls>
      <ProgressBarWrapper>
        <ProgressBar
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
      </ProgressBarWrapper>
      <TopRightIcons>
        <Icon>🔊</Icon>
        <Icon>⚙</Icon>
      </TopRightIcons>
      <TimeInfo>
        {formatTime(currentTime)} / {formatTime(duration)} {resolution}
      </TimeInfo>
    </VideoPlayerWrapper>
  );
};

export default VideoPlayer;