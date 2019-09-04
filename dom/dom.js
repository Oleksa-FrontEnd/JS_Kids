var headingElement = document.getElementById("heading");
    console.log(headingElement.innerHTML);

var newHeadingText = prompt("Введите новый заголовок:");
 $("#heading").text(newHeadingText);

$("h1").fadeTo(500, 0.5);

//Анимация элементов с помощью setInterval
var leftOffset = 0;
var moveHeading = function () {
    $("#heading").offset({ left: leftOffset});
    leftOffset++;
    if (leftOffset > 200) {
        leftOffset = 0;
    }
};
 setInterval(moveHeading, 30);

/*for (var i=0; i<2; i++) {
    $("#main-heading").fadeOut().delay(500).fadeIn();
}

 */

setInterval(function(){
    blink.style.opacity ^= 1 ;
   },1e3);



