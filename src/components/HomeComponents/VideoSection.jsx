import "./style.css";
import LazyLoad from 'react-lazy-load';
const VideoSection = () => {


    return (
        <div className="video_section">

            <LazyLoad>
                <video
                    id="videoIframe"
                    src={'https://res.cloudinary.com/db3swvtoo/video/upload/v1726862906/dftlprrqu5lal5bxcocg.mp4'}
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
