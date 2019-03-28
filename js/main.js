// AOS
AOS.init({
  duration: 1000,
})

jQuery(document).ready(function($){
  'use strict';

  
  // Animsition
  $(".animsition").animsition();
  
  // Scrollax
  $.Scrollax();

  // Smooth scroll
  var $root = $('html, body');

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 500);

    return false;
  });

  // Owl
  $('.wide-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

  // Show menu 
  if ($(window).width() > 768 ) {
    $('body').removeClass('menu-open');
    $('.js-templateux-menu').css('display', 'block');
  }
  // Window Resize
  $(window).resize(function(){
    var $this = $(this);
    $('.js-templateux-menu li').removeClass('staggard');
    $('.js-toggle-menu').removeClass('is-active');
    if ($this.width() > 768 ) {
      $('body').removeClass('menu-open');
      $('.js-templateux-menu').css('display', 'block');
      
    } else {
      if ($this.width() < 768 ) {
        $('.js-templateux-menu').css('display', 'none');
      }
    }
  });

  // Hamburger Button 
  $('.js-toggle-menu').on('click', function(e){
  	e.preventDefault();
  	
    var $this = $(this);

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('is-active');
      $('body').removeClass('menu-open');  
      $('.js-templateux-menu li').removeClass('staggard');
    } else {
      $this.addClass('is-active');
      $('body').addClass('menu-open');  

      $('.js-templateux-menu li').each(function(k){
        var $this = $(this);
        setTimeout(function(){
          $this.addClass('staggard');
        }, 100 * k );
      });

    }

  	if ( $('.templateux-menu').is(':visible') ) {
  		$('.js-templateux-menu').fadeOut(300);
  	} else {
  		$('.js-templateux-menu').fadeIn(300);
  	}
  })
});

// Copy to clipboard

function copyToClipboard(element) {
  var $temp = $('<input>');
  $('body').append($temp);
  $temp.val($(element).text()).select();
  document.execCommand('copy');
  $temp.remove();
}

$('#copyEmail').click(function() {
  $('#copiedAlert').css('display', 'block');
  $('#copiedAlert').delay(1000).fadeOut(300)
});


// Smooth Scroll

$('#portfolioNav').click(function() {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $('#portfolioSection').offset().top
  }, 500);
  $('.js-toggle-menu').removeClass('is-active');
  $('body').removeClass('menu-open');  
  $('.js-templateux-menu li').removeClass('staggard');
  $('.js-templateux-menu').fadeOut(300);
});

// $('#aboutNav').click(function() {
//   event.preventDefault();
//   $('html, body').animate({
//       scrollTop: $('#aboutSection').offset().top
//   }, 750);
//   $('.js-toggle-menu').removeClass('is-active');
//       $('body').removeClass('menu-open');  
//       $('.js-templateux-menu li').removeClass('staggard');
//       $('.js-templateux-menu').fadeOut(300);
// });

$('#logo').click(function() {
  event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#navbar').offset().top
    }, 500);
});

$('#contactNav').click(function() {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $('#contactSection').offset().top
  }, 1000);
  $('.js-toggle-menu').removeClass('is-active');
      $('body').removeClass('menu-open');  
      $('.js-templateux-menu li').removeClass('staggard');
      $('.js-templateux-menu').fadeOut(300);
});

// Sticky Nav

window.onscroll = function() {myFunction()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

$('#navbarBG').hide();

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky')
    $('#navbarBG').fadeIn();
    $('#logo img').attr('src','images/logo_rose-gold.svg');
    $('.templateux-menu a').css('color', '#c99297');
    $('.hamburger-inner').addClass('changed');
  } else {
    navbar.classList.remove('sticky');
    $('#navbarBG').fadeOut();
    $('#logo img').attr('src','images/logo_white.svg');
    $('.templateux-menu a').css('color', '#f5f0eb');
    $('.hamburger-inner').removeClass('changed');
  }
}





