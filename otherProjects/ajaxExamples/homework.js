$(document).ready(function() {

    $("#getClients").on("click", function() {

        $.getJSON("http://AlisonGrant.github.io/otherProjects/ajaxExamples/homework.json", function(data) {
            var html = "<list class='list-group'>" +
              "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";

              $.each(data, function(index, item) {

                  html += "<list-group>" +
                    "<list-group-item list-group-item-success>" + item.name + "</list-group-item list-group-item-success>" +
                    "<list-group-item list-group-item-info>" + item.age + "</list-group-item list-group-item-info>" +
                    "<list-group-item list-group-item-danger>" + item.gender + "</list-group-item list-group-item-danger>" +
                    "</list-group>";

                }) //each function

              html += "</list-group>";
              $("#data").append(html);

              //alert(data);
              //console.dir(data);

          }) //get JSON

      }) //button

  }) //ready
