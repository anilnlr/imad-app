console.log('Loaded!');
var element = document.getElementById('center-text');
element.innerText = "New Value";

var img = document.getElementById('madi');
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};