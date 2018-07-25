
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

// TASK #2
document.querySelector("#double button").addEventListener('click',function(){

    var answerPTagWithValue = document.querySelector('#compoundInvestment')
    // you do the rest
    var multiplier = answerPTagWithValue.textContent;

    multiplier *= 2;
    //console.log(multiplier); //Console.log de prueba

  document.querySelector('#compoundInvestment').textContent = multiplier;

})

// TASK #3
document.querySelector("#blow-up button").addEventListener('click',function(){
  var circle = document.querySelector('.circle-red')
  var circleWidth = circle.offsetWidth;
  var circleHeight = circle.offsetHeight;

  circle.style.height = circleHeight*2 + "px";
  circle.style.width = circleWidth*2 + "px";

  if (circle.offsetHeight > 320) {
    circle.style.height = 40 + "px";
    circle.style.width = 40 + "px";

  }
})

// TASK #4
document.querySelector("#remove button").addEventListener('click',function(){
  var lista = document.querySelectorAll('#user-list li');
  var padre = document.querySelector('#user-list')
  var listArray = [...lista];

  listArray.forEach (function(listElement) {
    if(listElement.className === 'inactive') {
      padre.removeChild(listElement);
    } else {
      padre.appendChild(listElement)
    }
  })
})

// TASK #5
document.querySelector("#reverse-squares button").addEventListener('click',function(){

  var lista = document.querySelectorAll('#squares-box span');
  var padre = document.querySelector('#squares-box')
  var listArray = [...lista];

  var newList = listArray.reverse();

  newList.forEach (function (listElement) {
    padre.appendChild(listElement)
  })

})

// TASK #6
document.querySelector("#pig-latin button").addEventListener('click',function(){

  var originalWord = document.querySelectorAll('#tasks li');
  var container = document.querySelector('#tasks');

  originalWord.forEach(function (listElement) {

    var theText =listElement.textContent
    //console.log(theText)
    var flipped = theText.split("").reverse().join("");

    //console.log(flipped)

    listElement.textContent = flipped;

    container.appendChild(listElement);

  })



})

//TASK #7
document.querySelector("#cycle-image button").addEventListener('click',function(){
   

   var imagen = document.querySelector('#city-img');
   console.log(imagen)
   var number = imagen.src;
   console.log(number)
   var target = number[number.length-5];
   console.log(target)

   var intNumber = target*1;
   intNumber++;
   console.log(intNumber)

  imagen.setAttribute('src', './images/city-photo-' + intNumber +'.jpg')


})