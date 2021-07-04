"use strinng";

const piano = document.querySelector('.piano'),
     pianoKey = document.querySelectorAll('.piano-key');

const audio = new Audio();
const startSound = (src) =>{
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
};
const sound = (e) =>{
    if(e.target.classList.contains('piano-key')) {
        const note = e.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        startSound(src);
    }
};



const startIteratingOverElements = (e) =>{
    if(e.target.classList.contains('piano-key')){
        e.target.classList.add('piano-key-active');
        sound(e); 
    }
    pianoKey.forEach((item) =>{
        item.addEventListener('mousedown', (e , i) =>{ 
            i.addEventListener('mouseover',()=>{
                sound(e);
                e.target.classList.add('piano-key-active');
            });
            
        });
        item.addEventListener("mouseout",(e)=>{
            e.target.classList.remove('piano-key-active');
        });
    });
}; 
piano.addEventListener('mousedown', startIteratingOverElements , false);

document.addEventListener('keydown', function(e) {
    if (e.code == 'KeyD') {
        let s = pianoKey[0];
        s.classList.add('piano-key-active');
        const src = `assets/audio/c.mp3`;
        startSound(src);
    } else if (e.code == 'KeyF'){
        let s = pianoKey[1];
        s.classList.add('piano-key-active');
        const src = `assets/audio/d.mp3`;
        startSound(src);    
    }else if (e.code == 'KeyG'){
        let s = pianoKey[2];
        s.classList.add('piano-key-active');
        const src = `assets/audio/e.mp3`;
        startSound(src); 
    }else if (e.code == 'KeyH'){
        let s = pianoKey[3];
        s.classList.add('piano-key-active');
        const src = `assets/audio/f.mp3`;
        startSound(src);  
    }else if (e.code == 'KeyJ'){
        let s = pianoKey[4];
        s.classList.add('piano-key-active');
        const src = `assets/audio/g.mp3`;
        startSound(src);
    }else if (e.code == 'KeyK'){
        let s = pianoKey[5];
        s.classList.add('piano-key-active');
        const src = `assets/audio/a.mp3`;
        startSound(src);  
    }else if (e.code == 'KeyL'){
        let s = pianoKey[6];
        s.classList.add('piano-key-active');
        const src = `assets/audio/b.mp3`;
        startSound(src);
    }else if (e.code == 'KeyR'){
        let s = pianoKey[7];
        s.classList.add('piano-key-active');
        const src = `assets/audio/c♯.mp3`;
        startSound(src);  
    }else if (e.code == 'KeyT'){
        let s = pianoKey[8];
        s.classList.add('piano-key-active');
        const src = `assets/audio/d♯.mp3`;
        startSound(src);  
    }else if (e.code == 'KeyU'){
        let s = pianoKey[10];
        s.classList.add('piano-key-active');
        const src = `assets/audio/f♯.mp3`;
        startSound(src); 
    }else if (e.code == 'KeyI'){
        let s = pianoKey[11];
        s.classList.add('piano-key-active');
        const src = `assets/audio/g♯.mp3`;
        startSound(src);  
    }else if (e.code == 'KeyO'){
        let s = pianoKey[12];
        s.classList.add('piano-key-active');
        const src = `assets/audio/a♯.mp3`;
        startSound(src);  
    }
});

document.addEventListener('keyup', function(e) {
    if (e.code == 'KeyD') {
        let s = pianoKey[0];
        s.classList.remove('piano-key-active');
    } else if (e.code == 'KeyF'){
        let s = pianoKey[1];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyG'){
        let s = pianoKey[2];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyH'){
        let s = pianoKey[3];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyJ'){
        let s = pianoKey[4];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyK'){
        let s = pianoKey[5];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyL'){
        let s = pianoKey[6];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyR'){
        let s = pianoKey[7];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyT'){
        let s = pianoKey[8];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyU'){
        let s = pianoKey[10];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyI'){
        let s = pianoKey[11];
        s.classList.remove('piano-key-active');
    }else if (e.code == 'KeyO'){
        let s = pianoKey[12];
        s.classList.remove('piano-key-active');
    }
});


const btnNotes = document.querySelector('.btn-notes'),
    btnLettesr = document.querySelector('.btn-letters');

const openNotes = () =>{
    btnNotes.classList.add('btn-active');
    btnLettesr.classList.remove('btn-active');
    pianoKey.forEach(i=>{
        i.classList.remove('letter');
    });
    
};

const openLetter = () =>{
    btnNotes.classList.remove('btn-active');
    btnLettesr.classList.add('btn-active');
    pianoKey.forEach(i=>{
        i.classList.add('letter');
    });
};

btnLettesr.addEventListener('click' ,openLetter);

btnNotes.addEventListener('click' ,openNotes);


const btnFull = document.querySelector('.fullscreen');
const element = document.querySelector('.main');
btnFull.addEventListener('click', () =>{
    document.documentElement.requestFullscreen();
    document.exitFullscreen();
});








