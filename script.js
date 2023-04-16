$(document).ready(function() {
    setTimeout(() =>{
    $('#preloader').addClass('loaded')
    }, 2500);
    setTimeout(() =>{
    $('#preloader').remove('loaded')
    }, 8000);
        })
        $('.appearance').click(function() {
            $('*').toggleClass("dark");
            $(this).toggleClass("switch");
          });