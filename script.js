window.onload = function() {

  // Normalize the various vendor prefixed versions of getUserMedia.
  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia || 
                            navigator.msGetUserMedia);
	// Check that the browser supports getUserMedia.
	// If it doesn't show an alert, otherwise continue.
	if (navigator.getUserMedia) {
	  // Request the camera.
	  var front = false;
		document.getElementById('flip-button').onclick = function() { front = !front; };
	  navigator.getUserMedia(

	    // Constraints
	    {
	      video: { facingMode: "environment" }
	    },

	    // Success Callback
	    function(localMediaStream) {
	    	// Get a reference to the video element on the page.
		var vid = document.getElementById('camera-stream');

			// Create an object URL for the video stream and use this 
			// to set the video source.
			vid.src = window.URL.createObjectURL(localMediaStream);
	    },

	    // Error Callback
	    function(err) {
	      // Log the error to the console.
	      console.log('The following error occurred when trying to use getUserMedia: ' + err);
	    }
	  );

	} else {
	  alert('Sorry, your browser does not support getUserMedia');
	}
}
//  (front? "user" : "environment")