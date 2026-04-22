(function () {
  function getVideoId() {
    const match = location.hash.match(/[#&?]v=([^&]+)/);
    return match ? match[1] : null;
  }

  const proto = HTMLMediaElement.prototype;
  const originalSrc = Object.getOwnPropertyDescriptor(proto, "src");

  Object.defineProperty(proto, "src", {
    set: function (value) {
      const id = getVideoId();

      if (id && this.classList && this.classList.contains("html5-main-video")) {
        value = "https://yt2009.truehosting.net/channel_fh264_getvideo?v=" + id;
      }

      return originalSrc.set.call(this, value);
    },
    get: originalSrc.get
  });
})();