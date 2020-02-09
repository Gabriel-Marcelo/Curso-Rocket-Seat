var xhr = new XMLHttpRequest(); //Método que nos dará acesso ao AJAX para recuperar alguma informação do servidor
// Requisição assíncrona: não acompanha o fluxo do javascript
xhr.open('GET', 'https://api.github.com/users/gabriel-marcelo');

xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}