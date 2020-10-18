export class ThreeAudio {

    constructor(url){
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioContext();
        this.currentBuffer = null;
        this.url = url;
        this.dataReady = false;
        this.audioData = null;
    }

    getAudioData(){
        fetch(this.url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            this.audioData = audioBuffer;
            console.log(audioBuffer);
        });
    }


}

