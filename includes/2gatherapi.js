var deafInit = function() {
   console.log("i did something for deaf");
}

var blindInit = function() {
    console.log("i did something for blind");
}
var recognizing;
var recognition = new webkitSpeechRecognition();

var startToListen = function(myFunction) {
    recognition.lang = 'he_HE';
    recognition.continuous = true;
    reset();
    recognition.onend = reset();
    recognition.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                textarea.value += event.results[i][0].transcript;
                myFunction(event.results[i][0].transcript);
                toggleStartStop();
            }
        }
    };
    toggleStartStop();
}

function reset() {
    recognizing = false;
}

function toggleStartStop() {
    if (recognizing) {
        recognition.stop();
        reset();
    } else {
        recognition.start();
        recognizing = true;
    }
}