console.log("welcome to hifi")

//Intialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressbar =document.getElementById('myprogressbar');


let songs=[
    {songName: "Abc" ,filePath:"1.mp3",coverPath:"1.jpg"},
    {songName: "Def" ,filePath:"2.mp3",coverPath:"2.jpg"},
    {songName: "Ghi" ,filePath:"3.mp3",coverPath:"3.jpg"},
    {songName: "Jkl" ,filePath:"4.mp3",coverPath:"4.jpg"},
    {songName: "Mno" ,filePath:"5.mp3",coverPath:"5.jpg"},

]
 

//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
       
    }
});
//listen to event
audioElement.addEventListener('timeupdate',()=>{

//update seekbar
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value *audioElement.duration/100;
})

const makeALLPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}


Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeALLPlays();
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');

       
    })
})