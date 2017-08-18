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

var button = document.getElementById('submitbtn');
//var counter = 0;
button.onclick = function(){
    // Create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystateChange = function() 
    {
        if(request.readyState === XMLHttpRequest.Done)
        {
            if(request.status ===200)
            {
                //var names = ['name1', 'name2','name3','name4'];
                var names = request.responseText;
                // convert string to an array
                names = JSON.parse(names);
                var list ='';
                for(var i=0;i<names.length;i++)
                {
                     list+= "<li>"+names[i]+"</li>";
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
              
           }
        }
    };
    // Make the request
    var nameinput= document.getElementById('name');
    var name = nameinput.value;
    request.open('GET', 'http://anilnlr1983.imad.hasura-app.io/submit-name?name='+name, true);
    request.send(null)
};

//submit name
var nameinput= document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('submitbtn');
submit.onclick = function() {
    var names = ['name1', 'name2','name3','name4'];
    var list ='';
    for(var i=0;i<names.length;i++)
    {
        list+= "<li>"+names[i]+"</li>";
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
