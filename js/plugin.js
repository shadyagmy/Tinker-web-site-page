/*global $, alert, console,prompt*/

   

$(document).ready(function () {
    
    "use strict";
    
   
    $('.carousel').carousel({
    interval: 4000
    })
    // links to sections code
    
    $("section.head .navx ul li a").on("click", function () {
        $("body,html").animate({
            
            scrollTop : ($("#" + $(this).data('li')).offset().top - 60)
            
        }, 700);
    });
       
    $(".main button").on("click", function () {
        
        $("body,html").animate({
            
            scrollTop : ($("#about").offset().top - 60)
            
        }, 700);
        
        
    });
    
    
//    adjusting header height
    
    $(window).resize(function () {
        
        $(".head").height($(window).height());
        
    });
    $(".head").height($(window).height());
    
    
    
    
    
    // change nav bar while scrolling
   
    
    
    $(window).on("scroll resize", function () {
        
    
        if ($(window).scrollTop() >= 70) {
            
            if ($(window).width() <= 750) { // for mobile
                
                $(".navbar-header").css("backgroundColor", "#fff");
                
                $("section.head #bs-example-navbar-collapse-1").css("backgroundColor", "rgba(250, 250, 250, 0.95)");
                
                $("section.head .navx h2.navbar-brand").css("color", "#000");
            } else { // for PC 
                
                $(".navbar-default").css("backgroundColor", "#fff");
            }
            
            
            $("section.head .navx h2.navbar-brand").css("color", "#000");
            
            $("section.head .navx ul li a").css("color", "#000");
            
        } else {
            
            if ($(window).width() <= 750) { // FOR MOBILE
                
                $(".navbar-header").css("backgroundColor", "transparent");
                $("section.head #bs-example-navbar-collapse-1").css("backgroundColor", "rgba(250, 250, 250, 0.95)");
                $("section.head .navx h2.navbar-brand").css("color", "#fff");
                

            } else { // FOR PC
                
                $(".navbar-default").css("backgroundColor", "transparent");
                $("section.head .navx .navbar-header").css("color", "#fff");
                $("section.head .navx .navbar-header").css("background-color", "transparent");
                $("section.head .navx h2.navbar-brand").css("color", "#fff");
                $("section.head #bs-example-navbar-collapse-1").css("backgroundColor", "transparent");
            }
            
            
            
            
            
            $("section.head .navx ul li a").css("color", "rgb(224,221,221)");
        }
    });
    
    
    
    
    // START TOGGLING ACTIVE CLASS FOR PORTFOLIO LINKS
    
    $(".portfolio .menu ul li").on("click", function () {
        
        $(this).addClass("activeli").siblings().removeClass("activeli");
        
        
    });
    
    
    
    
    
    // START TOGGLING ACTIVE CLASS FOR BLOG LINKS
    
    $(".blog .posts ul li").on("click", function () {
        
        $(this).addClass("activeli").siblings().removeClass("activeli");
           
        
    });
    
    $(".blog .posts ul li:nth-of-type(1)").on("click", function () {
        
        $(".blog .blog-item:nth-of-type(1)").fadeIn(1000).siblings().fadeOut(1);
           
    });
    
    $(".blog .posts ul li:nth-of-type(2)").on("click", function () {
        
        $(".blog .blog-item:nth-of-type(2)").fadeIn(1000).siblings().fadeOut(1);
           
    });
    
    $(".blog .posts ul li:nth-of-type(3)").on("click", function () {
        
        $(".blog .blog-item:nth-of-type(3)").fadeIn(1000).siblings().fadeOut(1);
           
    });
    
    $(".blog .posts ul li:nth-of-type(4)").on("click", function () {
        
        $(".blog .blog-item:nth-of-type(4)").fadeIn(1000).siblings().fadeOut(1);
           
    });
    
    

    
    // adjusting contact form 
    
    $(".my-contact form button:first-of-type").click(function () {
        
        $(".my-contact").fadeOut(200);
    });
    
    
    $(".contact-us .contact button").click(function () {
        
        
        $(".my-contact").fadeToggle(300);
        
        
        
        
    });
    
    
    if ($(window).width() <= 750) {
         
        $("section.head #bs-example-navbar-collapse-1 ul li a,.navbar-toggle ").click(function () {
            
            
            $("section.head #bs-example-navbar-collapse-1 ").slideToggle();
      
        });
         
    }
    
//    $(window).on("resize",function () {
//        
//        if ($(window).width() <= 750) {
//         
//        $("section.head #bs-example-navbar-collapse-1 ul li a,.navbar-toggle ").click(function () {
//            
//            
//            $("section.head #bs-example-navbar-collapse-1 ").slideToggle();
//      
//        });
//         
//    }
//        
//        
//    });
    
    
    
    
    
    $(window).on("load", function () {
       
        $(".pre-load").slideToggle(600);
        
    });
    
});




    

 



