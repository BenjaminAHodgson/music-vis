import {Howl, Howler} from 'howler';

export function Play(){
    Howler.volume(0.5);
    var currentSong = new Howl({
      src : ['/songlib/dopamine.mp3','/songlib/dopamine.ogg'],
      format: ['mp3', 'ogg']
    });
    currentSong.once('load', function(){
      currentSong.play();
      console.log('playing')
      console.log(currentSong);
    })
      
}