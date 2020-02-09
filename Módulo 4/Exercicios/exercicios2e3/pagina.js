var inputElement = document.querySelector('input');

var buttonElement = document.querySelector('button');

var listElement = document.querySelector('ul');


var repos = [];



buttonElement.onclick = function(){
    listElement.innerHTML = ' ';
    repos = [null];
    var usuario = inputElement.value;
    if(usuario == ""){
        alert('Digite o nome de um usuário');
        console.log(usuario.value);
    }
    else{
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + usuario + '/repos');
        xhr.send(null);

        
        xhr.onreadystatechange =  function(){
            if(xhr.readyState === 4){
                
                

                var aux = JSON.parse(xhr.responseText);
            
                for(var i = 0; i < aux.length; i++){
                    repos[i] = aux[i].name; 
                }

                for(var i = 0; i < repos.length; i++){
                    var itemElement = document.createElement('li');
                    var itemText = document.createTextNode(repos[i]);
                    itemElement.appendChild(itemText);
                    listElement.appendChild(itemElement);
                }
               
            }
        }
    }
    
}

