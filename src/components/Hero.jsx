import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);

    console.log("this current index videos : ", currentIndex);
    console.log("this clicked index videos : ", upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden border border-blue-500">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-full border border-red-500 overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              className="origin-center scale-50 hover:scale-100 opacity-0 hover:opacity-100 transition-all duration-500 ease-in"
              onClick={handleMiniVdClick}
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            className="absolute-center z-20 absolute object-cover object-center size-64 invisible"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            className="absolute object-cover object-center size-full top-0 left-0"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="absolute z-40 bottom-5 right-5 text-blue-75 special-font hero-heading">
          G<b>a</b>ming
        </h1>

        <div className="absolute top-0 left-0 border border-red-500 size-full z-40">
          <div>
            <h1 className="text-blue-100 special-font hero-heading">
              redefi<b>n</b>e
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
