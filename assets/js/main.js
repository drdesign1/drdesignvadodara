(function ($) {
    "use strict";
  
   /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

     // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });


    //Smoth Scroll
    $(function () {
        $('.nav-link, .smoth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });
    
    /*==========================
        Hero Area Slider
    ============================*/

    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        doots: false,
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'

    });
    //Wow Animation
    new WOW().init();
    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["Graphic Designer.", "Web Designer.","Digital Marketer.","DTP Operator."],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });


    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
    var form = $('#contact-form');

    var formMessages = $('.form-message');
    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);

                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
    
    
    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    //$(window).on('load', function () {
     //   $('.preloader').fadeOut();
   // });

/* =========================================
   🔥 PRELOADER + TYPING EFFECT START
========================================= */

// 👉 Yaha apna text likh (name change kar sakta hai)
const text = "Deepak's Portfolio";
let i = 0;

// 👉 Typing function (ek ek letter show karega)
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100); // typing speed
  }
}

/* =========================================
   🚀 PAGE LOAD KE BAAD RUN HOGA
========================================= */

window.addEventListener("load", function () {

  const loader = document.querySelector(".preloader");

  // 👉 check karo pehle visit hai ya nahi
  if (sessionStorage.getItem("visited")) {
    loader.style.display = "none"; // 👈 direct hide
    return;
  }

  // 👉 first time visit
  sessionStorage.setItem("visited", "true");

  typeEffect();

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 3000);

});

/* =========================================
   🔥 PRELOADER + TYPING EFFECT END
========================================= */




}(jQuery));


function animateSkills() {
  document.querySelectorAll(".skillbar").forEach(skill => {
    const percent = skill.getAttribute("data-percent");
    const bar = skill.querySelector(".skill-bar");

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = percent;
    }, 200);
  });
}

// Scroll trigger
window.addEventListener("scroll", function () {
  const about = document.getElementById("about");
  const top = about.offsetTop - 300;

  if (window.scrollY >= top) {
    animateSkills();
  }
});


// Form Button Send Messeg- trigger
const btn = document.getElementById("sendBtn");

if (btn) {
  btn.addEventListener("click", function () {
    btn.innerText = "Sending...";

    setTimeout(() => {
      btn.innerText = "Sent ✓";
    }, 1500);
  });
}




// Service Sections..

document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', function() {
        let box = this.parentElement;
        box.classList.toggle('active');

        if (box.classList.contains('active')) {
            this.innerText = "Show Less";
        } else {
            this.innerText = "Read More";
        }
    });
});

document.querySelectorAll('.single-service').forEach(box => {
    box.addEventListener('mouseleave', function() {
        box.classList.remove('active');
        let btn = box.querySelector('.read-more');
        btn.innerText = "Read More";
    });
});



// Contact Form ..

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const btn = document.getElementById("sendBtn");
    const msg = document.querySelector(".form-message");

    if(form){
        form.addEventListener("submit", async function(e) {
            e.preventDefault();

            btn.innerText = "Sending...";
            btn.disabled = true;

            let response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                msg.innerHTML = "✅ Message sent!";
                msg.style.color = "green";
                form.reset();
            } else {
                msg.innerHTML = "❌ Error!";
                msg.style.color = "red";
            }

            btn.innerText = "Send Message";
            btn.disabled = false;
        });
    }

});



// Auto Close Mobile Navbar -Menubaar
$(document).ready(function () {

    $('.navbar-nav .nav-link').on('click', function () {

        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }

    });

    $('.dropdown-item').on('click', function () {

        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }

    });

});

