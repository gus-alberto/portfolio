$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
    window.requestAnimationFrame(function() {
        var tl = gsap.timeline({});
        tl.to('.text-reveal', {clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)', y:0, duration: 1, delay: 1});
        tl.to('nav', {opacity: 1, duration: 1, delay: 1});
        tl.to('.hero-image-container', {clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'});
        tl.to('.portfolio__cover', {clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'});
     });
});

let toggle = document.querySelector('.menu-btn');
let navbar = document.querySelector('.menu--display');
toggle.onclick = function(){
    toggle.classList.toggle('open');
    navbar.classList.toggle('active');
}

function toggleMenu(){
    toggle.classList.remove('open');
    navbar.classList.remove('active');
}



$('[data-fancybox]').fancybox({
    animationEffect : "slide",
    loop: true,
    buttons:[
        'slideShow',
        'fullScreen',
        'thumbs',
        'share',
        'download',
        'zoom',
        'close'
    ]
})