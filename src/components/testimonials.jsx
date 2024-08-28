import React, { useRef, useState, useEffect } from "react";
import './Testimonials.scss'; // Certifique-se de importar o arquivo SCSS

export const Testimonials = () => {
  const videoData = [
    { video: "0828.mp4", name: 'Chico', poster: require('../assets/chico.jpg') },
    { video: "IMG_0871.mp4", name: 'Augusto', poster: require('../assets/Feedback.jpg') }
  ];

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Feedback dos Nossos Clientes</h2>
        </div>
        <div className="row">
          {videoData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-6 mb-5">
              <div className="testimonial">
                <VideoPlayer videoSrc={require(`../assets/${d.video}`)} poster={d.poster} />
                <div className="testimonial-content">
                  <div className="testimonial-meta">- {d.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoPlayer = ({ videoSrc, poster }) => {
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Limpar timeout se o componente for desmontado
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.controls = true;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.controls = false;
    }
  };

  const handlePlay = () => {
    setShowPoster(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePause = () => {
    startPosterTimeout();
  };

  const handleSeeking = () => {
    if (videoRef.current && !videoRef.current.paused) {
      startPosterTimeout();
    }
  };

  const startPosterTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (videoRef.current.paused) {
        setShowPoster(true);
      }
    }, 5000);
  };

  return (
    <div className="testimonial-video">
      <video
        ref={videoRef}
        poster={showPoster ? poster : ''}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPlay={handlePlay}
        onPause={handlePause}
        onSeeking={handleSeeking}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={videoSrc} type={videoSrc.endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'} />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};
