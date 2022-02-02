let toggleButton = document.querySelector('.nav-toggle');
let menu_bar = document.querySelector('.nav-menu');
let logo = document.querySelector('.logo');
let scrollBar = document.querySelector('.scroll-bar');



toggleButton.addEventListener('click', () => {
    menu_bar.classList.toggle('active-control');
});

window.addEventListener('scroll', () => {
    menu_bar.classList.remove('active-control');
    scrollIndicator();
});

logo.addEventListener('click', () => {
    menu_bar.classList.remove('active-control');
});


for (const item of menu_bar.childNodes){
    item.addEventListener('click', () => {
        menu_bar.classList.remove('active-control');
    });
}

function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}
