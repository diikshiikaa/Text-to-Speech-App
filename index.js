// SpeechSynthesisUtterance:- talking robot, speechSynthesis:-controller

let speech = new SpeechSynthesisUtterance();  //conatins text which need to be spoken out aloud

let voices = [];  //array which will contain the different voices

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{   //performs the function when event listener onvoicechanged is activated,
    voices = window.speechSynthesis.getVoices(); //voices array retrieves the available voices provided by speech synthesis object
    speech.voice = voices[0];   //sets the first voice in the speech

    voices.forEach((voice, i)=>(
        voiceSelect.options[i] = new Option(voice.name, i)  //makes each voice in voices array selectable
    ));
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];   //when a voice is changed, updates the speech's voice with the changed voice.
})

//when button is selected, speech-s text should have the text of textarea.
//then speak method is called
document.querySelector("button").addEventListener("click", ()=>{  
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})