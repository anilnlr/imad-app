//console.log('Loaded!');
//var element = document.getElementById('center-text');
//element.innerText = "New Value";

//var img = document.getElementById('madi');
//var marginLeft = 0;
//function moveRight(){
//    marginLeft = marginLeft + 10;
//    img.style.marginLeft = marginLeft + 'px';
//}

//img.onclick = function(){
//    var interval = setInterval(moveRight, 100);
//};

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    // Make a request to teh counter end point
    
    // capture the response and store it in a variable
    
    // Render the variable in the correct span
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};