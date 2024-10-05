import "./style.css";
import LazyLoad from 'react-lazy-load';
const VideoSection = () => {


    return (
        <div className="video_section">

            <LazyLoad>
                <video
                    id="videoIframe"
                    src={'https://res.cloudinary.com/db3swvtoo/video/upload/v1728112938/t1bhv53whkzzp5hzasey.mp4'}
                    width="100%"
                    height="auto"
                    autoPlay
                    muted
                    loop
                    controls
                >
                    Your browser does not support the video tag.
                </video>
            </LazyLoad>
        </div>

    );
};

export default VideoSection;
