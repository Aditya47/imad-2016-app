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


var submit1 = document.getElementById('submit_btn1');
submit1.onclick= function(){
    var request1 = new XMLHttpRequest();
    
    request1.onreadystatechange = function(){
        if(request1.readyState === XMLHttpRequest.DONE){
            if(request1.status===200){
                var names = request1.responseText;
                names = JSON.parse(names);
                var list1 = '';
                for(var i = 0;i<names.length;i++){
                    list1 +='<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('commentlist');
                ul.innerHTML = list1;
            }
            }
        };

var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET','http://aditya47.imad.hasura-app.io/submit-name?name='+ name,true);
request.send(null);    
};





