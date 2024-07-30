let utt = new SpeechSynthesisUtterance();
let  voices = [];
let voiceSelect = document.querySelector("select");

document.querySelector("button").addEventListener("click", () =>{

utt.text = document.querySelector("textarea"). value;
window.speechSynthesis.speak(utt);

});
