"use stricts";

let allBtnScroll = document.querySelectorAll('.case__liBtn');
let allLiImg = document.querySelectorAll('.case__elSlider');

console.log(allLiImg);

// allBtnScroll.forEach(el => {

//     el.addEventListener("click", (e)=>{
//         removeActifBtn();
//         deleteNoneBox();
//         el.classList.add('case__liBtn--actif');
//     });
// });


function removeImgAudit(bravo) {
    for (let i = 0; i <= 1; i++) {

        if (allLiImg[i].classList.contains('case__elSlider--none')) {
            allLiImg[bravo].classList.add('case__elSlider--none')
            allLiImg[i].classList.remove('case__elSlider--none')
        } else {
            allLiImg[i].classList.add('case__elSlider--none')
            allLiImg[bravo].classList.remove('case__elSlider--none')
        }
        allBtnScroll[i].classList.remove('case__liBtn--actif');
    }
}
function removeImgProto(bravo) {
    for (let i = 2; i <=4; i++) {
        allLiImg[bravo].classList.add('case__elSlider--none');
        if (allLiImg[i].classList.contains('case__elSlider--none')) {
            allLiImg[i].classList.remove('case__elSlider--none');
        }
        allBtnScroll[i].classList.remove('case__liBtn--actif');
    }

}
function removeImgMvp(bravo) {
    for (let i = 5; i <=8; i++) {
        allLiImg[bravo].classList.add('case__elSlider--none');
        if (allLiImg[i].classList.contains('case__elSlider--none')) {
            allLiImg[i].classList.remove('case__elSlider--none');
        }
        allBtnScroll[i].classList.remove('case__liBtn--actif');
    }

}

allBtnScroll[0].addEventListener('click', (e) => {
    removeImgAudit(1);
    // deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})
allBtnScroll[1].addEventListener('click', (e) => {
    removeImgAudit(0);
    //deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})

//02
allBtnScroll[2].addEventListener('click', (e) => {
    removeImgProto(2);
    //deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})
allBtnScroll[3].addEventListener('click', (e) => {
    removeImgProto(3);
    //deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})
allBtnScroll[4].addEventListener('click', (e) => {
    removeImgProto(4);
    //deleteNoneBox(0, 1);
    allLiImg[4].classList.add('case__elSlider--none');
    e.target.classList.add('case__liBtn--actif');
})
///03
allBtnScroll[5].addEventListener('click', (e) => {
    removeImgMvp(5);

    //deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})
allBtnScroll[6].addEventListener('click', (e) => {
    removeImgMvp(6);
    //deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})
allBtnScroll[7].addEventListener('click', (e) => {
    removeImgMvp(7);
    //deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})
allBtnScroll[8].addEventListener('click', (e) => {
    removeImgMvp(8);
    allLiImg[8].classList.add('case__elSlider--none');
    //deleteNoneBox(0, 1);
    e.target.classList.add('case__liBtn--actif');
})



function removeActifBtn() {
    allBtnScroll.forEach(el => {
        el.classList.remove('case__liBtn--actif');
    });
}

function deleteNoneBox(alpha, bravo) {
    if (allLiImg[alpha].classList.contains('case__elSlider--none')) {
        allLiImg[bravo].classList.add('case__elSlider--none')
        allLiImg[alpha].classList.remove('case__elSlider--none')
    } else {
        allLiImg[alpha].classList.add('case__elSlider--none')
        allLiImg[bravo].classList.remove('case__elSlider--none')
    }
}



//// le menu hamburger du case study 


var btnMenuHam= document.querySelector('.nav__btn').addEventListener('click', (e)=>{
    let navList = document.querySelector('.nav__list').classList.toggle('nav__list--open');
    if(e.target.innerHTML === "Fermer"){
        e.target.innerHTML = "Le menu"
    }else{
        e.target.innerHTML = "Fermer"
    }
})

