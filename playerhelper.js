(function () {
  function getVideoId() {
    const match = location.hash.match(/[#&?]v=([^&]+)/);
    return match ? match[1] : null;
  }

  function updateVideo() {
    const id = getVideoId();
    if (!id) return;

    const video = document.querySelector('.html5-video-container .video-stream.html5-main-video');
    if (!video) return;

    const src = `https://file.garden/aUYIWVAKvQxCBY-_/2013tvvideos/${id}.mp4`;

    if (video.src !== src) {
      video.src = src;
      video.load();
    }
  }

  const observer = new MutationObserver(() => {
    updateVideo();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener('hashchange', updateVideo);
  window.addEventListener('load', updateVideo);
})();