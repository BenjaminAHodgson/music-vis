import * as audio from './classes/audio.js';

let tracks = {
    dopamine: window.location.href + "/public/songlib/dopamine.mp3"
}

export async function collectAudio(){
    var audioBuffer = new audio.ThreeAudio(tracks.dopamine);
    audioBuffer.getAudioData();
}