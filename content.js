var form = $('#word_form');

form.on("submit", function(e){
  e.preventDefault();
  var word = form.find('input[name=word]');
  var r_word = form.find('input[name=r_word]');
  console.log('Hiya');
  // $('#words').append(form_input.val() + '<br>');
  // form_input.val('')



    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(word.val(), r_word.val());
                debugger;
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
});
