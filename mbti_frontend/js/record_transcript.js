var recognition = null;
var isRecording = false;
var speech = "";
let recordButton = document.querySelector('.record-button');
let pulseRing = document.createElement('div');

function toggleRecording() {
  let micImage = document.getElementById('mic-image');

  micImage.classList.add('hide'); // Add the 'hide' class

  if (isRecording) {
    micImage.src = 'assets/imgs/mic.png';
    stopRecording();
    isRecording = false;
  } else {
    micImage.src = 'assets/imgs/record_mic.png';
    startRecording();
    isRecording = true;
  }
  
}

function startRecording() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function (e) {
    document.getElementById("transcription").innerHTML =
      e.results[0][0].transcript;
    speech = e.results[0][0].transcript;
    stopRecording();
  };

  recognition.onerror = function (e) {
    stopRecording();
  };
}

function stopRecording() {
  recognition.stop();
  recognition = null;

  setTimeout(function () {
    document.getElementById("transcription").style.display = "block";
  }, 3000);
}

async function submit() {
  let formData = new FormData();
  // Get the speech from the textarea
  let speech = document.getElementById("transcription").value;

  // Print the modifiedSpeech to the console
  console.log("Modified speech:", speech);

  formData.append("mbti_string", speech);
  var xhr = new XMLHttpRequest();
  // xhr communicate with a server

  // when the server communication is complete ('onload')
  xhr.onload = function (e) {
    console.log(this.status);
    if (this.status == 200) {
      // successful
      result = JSON.parse(e.target.responseText);
      message = result.message;
      mbti = result.mbti;
      // mbti = "ISTJ"
      console.log(message);
      window.location = "personality.html?mbti=" + mbti;
    }
    if (this.status == 400) {
      // bad request
      alert("Server error: 500, Server returned: ", e.target.responseText);
    }
    if (this.status == 500) {
      // internal server error
      alert("Server error: 500, try again or contact 010-1234567 for help");
    }
  };

  xhr.open("POST", "http://localhost:8000/predict", true);
  xhr.send(formData);
}

function onDataChange(element) {
  speech = document.getElementById(element).value();
  print(speech);
}
