const backgroundVideos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
  ];
  
  setRandomBackgroundVideo();
  
  function fetchQuote() {
    // ...
    setQuote({ text: data.content, author: data.author });
    setRandomBackgroundVideo();
  }
  
  function setRandomBackgroundVideo() {
    const randomIndex = Math.floor(Math.random() * backgroundVideos.length);
    const randomBackgroundVideo = backgroundVideos[randomIndex];
    const videoElement = document.getElementById('bg-video');
    videoElement.src = randomBackgroundVideo;
    videoElement.currentTime = 0;
  }