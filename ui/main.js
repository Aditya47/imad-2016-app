var button = document.getElementById('counter');

button.onclick = function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    
    
    request.open('GET','http://aditya47.imad.hasura-app.io/counter',true);
    request.send(null);
};


var submit = document.getElementById('submit_btn');
submit.onclick= function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i = 0;i<names.length;i++){
                    list +='<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
            }
        };

var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET','http://aditya47.imad.hasura-app.io/submit-name?name='+ name,true);
request.send(null);    
};



var submita = document.getElementById('submit_bt');
submita.onclick= function(){
    var requesta = new XMLHttpRequest();
    
    requesta.onreadystatechange = function(){
        if(requesta.readyState === XMLHttpRequest.DONE){
            if(requesta.status===200){
                var names = requesta.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i = 0;i<names.length;i++){
                    list +='<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('cmtlist');
                ul.innerHTML = list;
            }
            }
        };

var nameInputa = document.getElementById('nami');
var namei = nameInputa.value;
request.open('GET','http://aditya47.imad.hasura-app.io/submit-name?name='+ namei,true);
request.send(null);    
};



               




