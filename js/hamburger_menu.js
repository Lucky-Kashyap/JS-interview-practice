

let menu = document.querySelector('.ri-menu-line');

let navigation = document.querySelector('ul');
let close = document.querySelector('.ri-close-fill');

menu.addEventListener('click',()=>{

    navigation.classList.add('show');

    navigation.style.transition='all cubic-bezier(0.19, 1, 0.22, 1) 2s';
    menu.classList.add('hide');
    close.classList.add('show');
    // navigation.style.display='block';
    // menu.style.display='none';
    // close.style.display='block';
})
close.addEventListener('click',()=>{
    navigation.classList.remove('show');
    close.classList.remove('show');
    menu.classList.remove('hide');
    // navigation.style.display='none';
    // close.style.display='none';
    // menu.style.display='block'
;})