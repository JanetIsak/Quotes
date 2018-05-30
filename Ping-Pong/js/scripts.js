//back-end logic//

function create_pong(numbers) {
var numbersList = []
  for(var currentNumber = 1;
      currentNumber <= numbers; currentNumber += 1) {
        if(currentNumber%3===0 && currentNumber%5===0){
          numbersList.push("pingpong");
        }
        else if(currentNumber%3===0){
          numbersList.push("Ping");
      }
      else if(currentNumber%5===0){
        numbersList.push("pong");
      }
      else {
        numbersList.push(currentNumber);
      }
    }
      return numbersList;
  }

//front-end logic//

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
  $("ul#result").empty();
  var numbers = parseInt($("input#number").val());
  var numbersList = create_pong(numbers);
  numbersList.forEach(function(item) {
  $("ul#result").append("<li>"+item+"</li>")
    });
  });
});
