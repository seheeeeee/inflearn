let keyword = document.querySelectorAll('.keyword ul li a');
let hdnKeyword = document.querySelectorAll('.hiddenMenu ul li a');
for(let i = 0; i < keyword.length; i++){
    let keyItem = keyword[i];
    keyItem.addEventListener('click', (e) => {
        for(let j = 0; j < keyword.length; j++){
            keyword[j].classList.remove('on');
        }
        keyItem.classList.add('on');
        e.preventDefault();
    })
}
for(let k = 0; k < hdnKeyword.length; k++){
    let hdnKeyItem = hdnKeyword[k];
    hdnKeyItem.addEventListener('click', (e) => {
        for(let s = 0; s < keyword.length; s++){
            hdnKeyword[s].classList.remove('on');
        }
        hdnKeyItem.classList.add('on');
        e.preventDefault();
    })
}

let hiddenBtn = document.querySelector('.hiddenBtn');
hiddenBtn.addEventListener('click', ()=>{
    let hiddenMenu = document.querySelector('.hiddenMenu');
    
    if(hiddenMenu.style.display == 'none'){
        hiddenBtn.className += ' active';
        hiddenMenu.style.display = 'block';
    }else{
        hiddenBtn.classList.remove('active');
        hiddenMenu.style.display = 'none';
    }
});

let hiddenCareer = document.querySelector('.hiddenCareer');
let viewBtn = document.querySelector('button.viewBtn');
let closeBtn = document.querySelector('button#closeBtn');

viewBtn.addEventListener('click', () => {
    if(hiddenCareer.style.display == 'none'){
        hiddenCareer.style.display = 'block';
    }else{
        hiddenCareer.style.display = 'none';
    }
})
closeBtn.addEventListener('click', () => {
    hiddenCareer.style.display = 'none';
})