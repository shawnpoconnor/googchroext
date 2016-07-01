// function Hello(){
//   console.log("Hello my dear friend!!!")
// }

// $('#word_form').submit(function(e){
//   e.preventDefault();
//   $.ajax({
//     url: popup.html
//     method: post
//   })
// })



var form = $('#word_form');
var word = $(form.attr('word'));


form.on("submit", function(e){
  e.preventDefault();
  var form_input = form.find('input[name=word]');
  console.log('Hiya');
  $('#words').append(form_input.val() + '<br>');
  form_input.val('')
});
