(function () {
  function getVideoId() {
    const hash = location.hash;
    const match = hash.match(/[#&?]v=([^&]+)/);
    return match ? match[1] : null;
  }

  function ensureVideo() {
    const id = getVideoId();
    if (!id) return;

    let video = document.querySelector('.video-stream.html5-main-video');

    if (!video) {
      video = document.createElement('video');
      video.className = 'video-stream html5-main-video';
      video.controls = true;
      video.autoplay = true;

      document.body.appendChild(video);
    }

    const src = `https://file.garden/aUYIWVAKvQxCBY-_/2013tvvideos/${id}.mp4`;

    if (video.src !== src) {
      video.src = src;
      video.load();
    }
  }

  window.addEventListener('hashchange', ensureVideo);
  window.addEventListener('DOMContentLoaded', ensureVideo);
})();