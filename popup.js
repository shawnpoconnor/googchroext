// function Hello(){
//   console.log("Hello my dear friend!!!")
// }

$('#word_form').submit(function(e){
  e.preventDefault();
  $.ajax({
    url: popup.html
    method: post
  })
})

var child = document.getElementById('hi');
var parent = document.getElementById('parent');

setTimeout(function() {
  parent.removeChild(child);
}, 3000)

