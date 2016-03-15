$(document).ready(function() {

    $("#getClients").on("click", function() {

        $.getJSON("http://AlisonGrant.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json", function(data) {
            var html = "<table>" +
              "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";

            $.each(data, function(index, item) {
                $("#data").append(item.name);
              }) //each function

              html += "</table>";
              $("#data").append(html);

            //alert(data);
            //console.dir(data);

          }) //get JSON

      }) //button

  }) //ready
