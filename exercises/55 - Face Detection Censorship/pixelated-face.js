// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.
const video = document.querySelector('.webcam');

const videoCanvas = document.querySelector('.video');
const ctx = videoCanvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new FaceDetector();
const SIZE = 10;
const SCALE = 1.35;

const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);
console.log(optionsInputs);
const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
  console.log(event.currentTarget.name);
}
optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// Write a function that will populate the users video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  console.log(stream);
  video.srcObject = stream;
  await video.play();
  // Size the canvas to be the same size as the video
  videoCanvas.width = video.videoWidth;
  videoCanvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  faces.forEach(drawFace);
  faces.forEach(censor);
  // Ask the browser when the next animation frame is, and tell it to run detect for us
  requestAnimationFrame(detect);
}

// Draw around the face
function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, videoCanvas.width, videoCanvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

// pixelate the face
function censor({ boundingBox: face }) {
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  faceCtx.imageSmoothingEnabled = false;
  // Draw the small face
  faceCtx.drawImage(
    // 5 Source args
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 Draw args
    face.x, // Where should we start drawing the x and y
    face.y,
    options.SIZE,
    options.SIZE
  );
  // take that face back out and draw it back at normal size

  const width = face.width * options.SCALE;
  const height = face.width * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // Where do we pull the source from
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (width - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
