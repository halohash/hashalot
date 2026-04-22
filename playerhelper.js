(function () {
  function getVideoId() {
    const match = location.hash.match(/[#&?]v=([^&]+)/);
    return match ? match[1] : null;
  }

  function ensureVideo() {
    const id = getVideoId();
    if (!id) return;

    let container = document.querySelector('.html5-video-container');
    if (!container) return;

    let video = container.querySelector('.video-stream.html5-main-video');

    if (!video) {
      video = document.createElement('video');
      video.className = 'video-stream html5-main-video';
      video.controls = true;
      video.autoplay = true;
      container.appendChild(video);
    }

    const src = `https://file.garden/aUYIWVAKvQxCBY-_/2013tvvideos/${id}.mp4`;

    if (video.src !== src) {
      video.src = src;
      video.load();
    }
  }

  window.addEventListener('hashchange', ensureVideo);
  window.addEventListener('DOMContentLoaded', ensureVideo);

  const observer = new MutationObserver(ensureVideo);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();