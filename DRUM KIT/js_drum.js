const audio =document.querySelector('audio');
const audioSource = document.querySelectorAll('.key');
const clap = document.querySelector('.clap');
const hihat = document.querySelector('.hihat');
const kick = document.querySelector('.kick');
const openhat = document.querySelector('.openhat');
const boom = document.querySelector('.boom');
const ride = document.querySelector('.ride');
const snare = document.querySelector('.snare');
const tom = document.querySelector('.tom');
const tink = document.querySelector('.tink');

const a = document.querySelector('.a');
const s = document.querySelector('.s');
const d = document.querySelector('.d');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');

document.addEventListener('keydown',function(e){
if(e.keyCode==65){
    clap.play();
    clap.currentTime=0;
    a.classList.add('animate');
    setTimeout(function(e){
        a.classList.remove('animate');
    },100);
}
else if(e.keyCode==83){
    hihat.play();
    hihat.currentTime=0;
    s.classList.add('animate');
    setTimeout(function(e){
        s.classList.remove('animate');
    },100);
}
else if(e.keyCode==68){
    kick.play();
    kick.currentTime=0;
    d.classList.add('animate');
    setTimeout(function(e){
        d.classList.remove('animate');
    },100);
}
else if(e.keyCode==70){
    openhat.play();
    openhat.currentTime=0;
    f.classList.add('animate');
    setTimeout(function(e){
        f.classList.remove('animate');
    },100);
}
else if(e.keyCode==71){
    boom.play();
    boom.currentTime=0;
    g.classList.add('animate');
    setTimeout(function(e){
        g.classList.remove('animate');
    },100);
}
else if(e.keyCode==72){
    ride.play();
    ride.currentTime=0;
    h.classList.add('animate');
    setTimeout(function(e){
        h.classList.remove('animate');
    },100);
}
else if(e.keyCode==74){
    snare.play();
    snare.currentTime=0;
    j.classList.add('animate');
    setTimeout(function(e){
        j.classList.remove('animate');
    },100);
}
else if(e.keyCode==75){
    tom.play();
    tom.currentTime=0;
    k.classList.add('animate');
    setTimeout(function(e){
        k.classList.remove('animate');
    },100);
}
else if(e.keyCode==76){
    tink.play();
    tink.currentTime=0;
    l.classList.add('animate');
    setTimeout(function(e){
        l.classList.remove('animate');
    },100);
}
});