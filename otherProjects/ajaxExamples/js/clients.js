$(document).ready(function(){

$("#getClients").on("click", function() {

  $.getJSON("http://AlisonGrant.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json", function(data) {

    $.each(data, function(index, item){
      $("#data").append(item.name);

    }) //each function

    //alert(data);
    //console.dir(data);

  }) //get JSON

}) //button

}) //ready
