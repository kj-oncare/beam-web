/*  REVIEW: scroll() cannot be used with overflow at the same time
    SOLUTION: used width: 100% instead of 100vw  */

var navbar = document.getElementById("nav");
var navLogo = document.getElementById("nav-logo");
var homeIntro = document.getElementById("menu-home-intro");
var homeApp = document.getElementById("menu-home-app");

/*  TODO: figure out how to addClass & removeClass */
var ctaJobsBefore = document.getElementById("cta-jobs-before");
var ctaJobsAfter = document.getElementById("cta-jobs-after");

/*  detect window width */
var width = $(window).width();
$( window ).on('resize', function() {
    if($(this).width() != width){
        width = $(this).width();
        console.log(width);
    }
});
$( window ).scroll(function() {
    if( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ){
        navbar.style.backgroundColor = "white";
        navLogo.style.backgroundImage = "url('img/logo-beam.svg')";
        homeIntro.style.color = "black";
        homeApp.style.color = "black";
        ctaJobsBefore.style.display = "none";
        ctaJobsAfter.style.display = "flex";
    }
    else {
        navbar.style.backgroundColor = "transparent";
        navLogo.style.backgroundImage = "url('img/logo-beam-w.svg')";
        homeIntro.style.color = "white";
        homeApp.style.color = "white";
        ctaJobsBefore.style.display = "flex";
        ctaJobsAfter.style.display = "none";
    }
});