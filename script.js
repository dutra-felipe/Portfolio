const menu = document.querySelector('.btn-menu');
const menuMobile = document.querySelector('.menu-mobile');
const linksMobile = document.querySelectorAll('.link-mobile');
const gifsInfo = [
    { id: 'meuGif1', intervalo: 10000 }, 
    { id: 'meuGif2', intervalo: 10000 },
    { id: 'meuGif3', intervalo: 10000 }, 
    { id: 'meuGif4', intervalo: 11000 },
    { id: 'meuGif5', intervalo: 12000 },
    { id: 'meuGif6', intervalo: 18000 }
];

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    menuMobile.classList.toggle('ativo');
   
    if (menuMobile.classList.contains('ativo')) {
        document.body.style.overflow = 'hidden';
        
        linksMobile.forEach(link => {
            link.addEventListener('click', () => {
                document.body.style.overflow = '';
                menu.classList.remove('ativo');
                menuMobile.classList.remove('ativo');
            });
        });
    } else {
        document.body.style.overflow = '';
    }
});

function restartGifById(id) {
    const gif = document.getElementById(id);
    gif.src = gif.src;
}

function restartGifs() {
    gifsInfo.forEach(gif => {
        setInterval(() => restartGifById(gif.id), gif.intervalo);
    });
}

restartGifs();

