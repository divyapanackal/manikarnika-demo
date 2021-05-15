import './scss/style.scss';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

(function($) {
    console.log("herh")
    $('#menu-toggle').on('click',function() {
        console.log("herh")
        $(this).toggleClass('on');
        // $('#overlay').toggleClass('open');
       });




})($);
