console.info('Hello world');


/// modification de l'état actif de la nav 

let allLinkNav = document.querySelectorAll('.nav__el');

allLinkNav.forEach(el => {
    el.addEventListener('click', ()=>{
        deleteActifState (el);
        el.classList.add('nav__el--actif');
        
    });
})

function deleteActifState (el){
   
    allLinkNav.forEach(el => {
        el.classList.remove('nav__el--actif')
    });
}