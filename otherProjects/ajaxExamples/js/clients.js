$("#getClients").on("click", function() {

$.getJSON("http://AlisonGrant.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json", function(data){

alert(data);
console.dir(data);
})

})
