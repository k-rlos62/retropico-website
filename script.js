
// Iframe spotify
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('spotify_iframe');
    const options = {
        uri: 'https://open.spotify.com/intl-fr/artist/3GyRy9RpnwQiUVFEVybRTQ?si=WOn41sAwTkumtepJRxqOjw',
        // width:"100%",
        height:"100%",

    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
    };


      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

      var player;
      function onYouTubeIframeAPIReady() {
        var width=document.getElementById("video").offsetWidth;
        console.log(width)
        var height=0.565*width
        console.log(height)
        player = new YT.Player('video', {
          height: height,
          width: width,
          videoId: 'ebkxyi8CN9g',
          playerVars:{modestbranding:1,showinfo:0}
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }




              // 4. The API will call this function when the video player is ready.
        // function onPlayerReady(event) {
        //     event.target.playVideo();
        // }

        // // 5. The API calls this function when the player's state changes.
        // //    The function indicates that when playing a video (state=1),
        // //    the player should play for six seconds and then stop.

        // function onPlayerStateChange(event) {
        // }
        // function stopVideo() {
        //     player.stopVideo();
        // }