import {Howl, Howler} from 'howler';
import $ from 'jquery';

export function Play(event){
    var subject = event.target;
    loading(subject);
    
    Howler.volume(0.25);

    var currentSong = new Howl({
      src : ['/songlib/dopamine.mp3','/songlib/dopamine.ogg'],
      format: ['mp3', 'ogg']
    });
    currentSong.once('load', function(){
       loaded(subject);
       currentSong.play();
    })
      
}

export function Active(item){
    $(document).on('click', function(event){
        if($(event.target).closest($(item.target)).length === false){
            $(item.target).removeClass('active');
        }
    });
}

export function BtnPlay(event){
    Play(event);
    Active(event);
}


function loading(target){
    $(target).addClass('loading');
}
function loaded(target){
    $(target).removeClass('loading');
    $(target).addClass('active');
}