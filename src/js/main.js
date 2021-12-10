import $ from './lib/core';
import './lib/lib';

// $('div').click(function() {
//      console.log($(this).index());
// });
// console.log($('.active').fadeIn(5000));

$('#first').click(function() {
    $('div').eq(1).fadeOut(2000);
});
$('[data-count="second"]').click(function() {
    $('div').eq(2).fadeOut(2000);
});
$('#last').click(function() {
    $('div').eq(1).fadeToggle(2000);
    $('div').eq(2).fadeToggle(2000);
});






