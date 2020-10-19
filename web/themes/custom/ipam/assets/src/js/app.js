import '@/scss/app.scss'

import $ from 'jquery'
window.$ = window.JQuery = $;

import Slick from './Elements/slick';
import Modaal from './Elements/modaal';

import('./Elements/fontawesome').then(module => {
  new module.default()
})

new Slick();
new Modaal();

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ipam = {
    attach: function (context, settings) {
      // Document.ready function
      $(document).ready(function() {
        
      });
    }
  };

})(jQuery, Drupal);

/**
 * Mobile menu
 */

// $(window).on('resize', () => {
//   let width = document.documentElement.clientWidth;
//   let done = document.body.classList.contains('mm-once');
//   document.body.classList.add('mm-once')
//
//   import(
//     './Elements/mmenu'
//     ).then(module => {
//     new module.default()
//   })
// });
//
// $(window).resize();
$(document).ready(function() {
  $("a.folder").each(function () {
    $(this).parent().next().hide();
    $(this).parent().click(function (e) {
      e.preventDefault();
      $(this).next().toggle();
      $(this).children().toggleClass("active");
    })
  });
});

