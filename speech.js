click_to_Convert.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            //.join('')

       // document.getElementById("convert_text").innerHTML = transcript;
        //console.log(transcript); // Its showes data on console
        convert_text.innerHTML = transcript;
    })
    
    if (speech == true) {
        recognition.start();
    }
})