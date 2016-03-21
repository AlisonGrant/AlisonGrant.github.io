$(document).ready(function() {

    $("#getClients").on("click", function() {

        $.getJSON("http://AlisonGrant.github.io/otherProjects/ajaxExamples/homework.json", function(data) {
            var html = "<table class='table table-hover table-striped'>" +
              "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";

            

          }) //get JSON

      }) //button

  }) //ready
