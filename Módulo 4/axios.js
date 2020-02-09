axios.get('https://api.github.com/users/gabriel-marcelo')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});
 