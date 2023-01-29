let btn = document.querySelector('#btn');
let icon = document.querySelector('.fa-bars');
let mobileNav =document.querySelector('.mobile-nav');


btn.addEventListener('click',()=>{
    mobileNav.classList.toggle('active');
    icon.classList.toggle('fa-xmark');

}); 