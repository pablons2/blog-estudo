
var lista_de_artigos = document.getElementById('lista-de-artigos');

const artigos = [
    {
        "img": `../static/imgs/img1.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img2.png`,
        "sub": `Granny gives everyone the finger, and other tips from OFFF Barcelona`
    },
    {
        "img": `../static/imgs/img3.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img4.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img5.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img6.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img7.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img8.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img9.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img10.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img11.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
    {
        "img": `../static/imgs/img12.png`,
        "sub": `Here are some things you should know regarding how we work`
    },
];


const artigosHTML = artigos.map((item) => {
    return `<figure class="lista-de-artigos"> <img src="${item.img}" alt="${item.sub}" class="img-lista-de-artigos"> <figcaption>${item.sub}</figcaption></figure>`;
});


lista_de_artigos.innerHTML = artigosHTML.join('');


document.addEventListener("DOMContentLoaded", function () {
    const btn_menu = document.querySelector('.btn-toggle'); 
    const lista_menu = document.querySelector('#menu-active');

    btn_menu.addEventListener("click", () => {
        lista_menu.classList.toggle('menu-active');
    });
});

