(function () {
  function getVideoId() {
    const match = location.hash.match(/[#&?]v=([^&]+)/);
    return match ? match[1] : null;
  }

  const original = window.ExtractFormatsForCustomPlayerThingMaBob;

  window.ExtractFormatsForCustomPlayerThingMaBob = function (formats) {
    const id = getVideoId();

    if ((!formats || !formats.length) && id) {
      return [{
        url: "https://hashpie.pages.dev/channel_fh264_getvideo?v=" + id,
        mimeType: "video/mp4"
      }];
    }

    return original ? original(formats) : formats;
  };
})();