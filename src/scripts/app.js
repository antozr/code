console.info('Hello world');


/// modification de l'état actif de la nav 

let allLinkNav = document.querySelectorAll('.nav__el');

allLinkNav.forEach(el => {
    el.addEventListener('click', ()=>{
        deleteActifState (el);
        el.classList.add('nav__el--actif');
        
    });
});

function deleteActifState (el){
   
    allLinkNav.forEach(el => {
        el.classList.remove('nav__el--actif')
    });
}


/// modification de la date dans le footer 

let spanDate = document.querySelector('#footDate')
spanDate.innerHTML = new Date().getFullYear()



/// import animation gsap

let allImgBoxAnim = document.querySelectorAll('.sect__imgBox');
let allImgAnim = document.querySelectorAll('.sect__img--anim');

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log(gsap.version);

// gsap.set(allImgBoxAnim[0], {
//     opacity:0,
   
// })
// gsap.to(allImgBoxAnim[0], {
//     opacity:1,
//     scaleY:1,
//     duration: 4,
//     scrollTrigger:{
//         trigger: allImgBoxAnim[0],
//         start: 'top top',
//         end : "center bottom",
//         markers: true
//     }
// })

gsap.to('#animTextBig', {
    x: '-400%',
    duration: 30,
    
    scrollTrigger: {
        trigger: '#boxImgOne',
        toggleActions: 'play none reverse none',
        start: 'top  +=800',
        end: "+=900",
        markers: false,
    }
});


