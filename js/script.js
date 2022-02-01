let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
$(document).ready(function(){

    $(window).on('scroll load',function(){
$('section').each(function(){

    let top = $(window).scrollTop();
    let height = $(this).height();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');

    if(top >= offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }

});

});

});
