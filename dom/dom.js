var headingElement = document.getElementById("main-heading");
    console.log(headingElement.innerHTML);

var newHeadingText = prompt("Введите новый заголовок:");
 $("#main-heading").text(newHeadingText);

var mainFrend  = ["Jon", "Jek", "Gnom"];
for (var i = 0; i < mainFrend.length; i++) {
    var hobby = prompt("Чем увлекается друг?");
    $("body").append("<p>" + mainFrend[i] + "-" + hobby + "</p>");
};

$("p").append(" лучший").fadeIn(2000);

$("h1").slideUp(1000).slideDown(1000);/* элементы исчезают, уплывая вверх,
                                        а при вызове slideDown появляются, опускаясь сверху.
                                        */