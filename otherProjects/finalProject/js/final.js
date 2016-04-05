$(document).ready(function() {

  //get all nav li, add click event
  $(".nav").find("li").on("click", function() {

    //remove all active class
    $(".nav").find("li").removeClass("active");

    //add active class to clicked li
    $(this).addClass("active");

    var page = $(this).attr("id");
    getPartial(page);

    //click
  })


  function getPartial(partial) {

    if (partial == "home") {
      $.get("partials/home.html", function(data) {
        $("#pageContent").html(data);
        $('.carousel').carousel()

      })

      //COLLECTION
    } else if (partial == "collection") {
      $.get("partials/collection.html", function(data) {
        $("#pageContent").html(data);
      })

      //ORDER
    } else if (partial == "order") {
      $.get("partials/order.html", function(data) {
        $("#pageContent").html(data);

        //change button text
        $("#myButton").on("mouseenter", function() {
            $(this).text("Buy Now");
          })
          .on("mouseleave", function() {
            $(this).text("Click here");
          });

        //click event, check to see if everything has been filled out
        $("#myButton").on("click", function() {

            $("input,select").filter(function() {
              return !this.value;
            }).closest("div").addClass("has-error");

            //remove error once they have inputed information
            $("input,select").filter(function() {
              return this.value;
            }).closest("div").removeClass("has-error");

            var errors = $(".has-error");

            if (errors.length < 1) {
              sendConfirmation();
            }

          }) //click


        //colour around single line text
        $("#mySingleLineText").on("focus", function() {
          $(this).css("background-color", "f03d00");
        })
        $("#mySingleLineText").on("blur", function() {
          $(this).css("background-color", "#FFF");
        });


        $("#mySelect").on("change", function() {
          var val = $(this).val();

          $("#mySelectMessage").html(val + " is a beautiful choice!");

        });

        //user click button
        $("#myButton").on("click", function() {

          var myInput = $(".mySingleLineText").val();
          var myTextArea = $("#myTextArea").val();
          var mySelect = $("#mySelect").val();
          var myRadio = $("[name='material']:checked").val();
          var myCheckValues = [];
          //each is a jquery loop for objects/arrays
          $("[name='feedback']:checked").each(function() {
            myCheckValues.push($(this).val());
          });

          /*
          $("#log").append("<br>Value of input is: " + myInput);
          $("#log").append("<br>Value of textarea is: " + myTextArea);
          $("#log").append("<br>Value of select is: " + mySelect);
          $("#log").append("<br>Value of radio button is: " + myRadio);
          $("#log").append("<br>Value of checkbox is: " + myCheckValues);
          */
        })


        //mailButton - to sign up for newsletters
        $("#mailButton").click(function() {

          var email = prompt("Please enter your email address");
          var email2 = function(email) {
            confirm("Thanks! Happy shopping!");
          };
          email2(email)

          //end mailButton
        })

      })

      // REVIEWS
    } else if (partial == "reviews") {
      $.get("partials/reviews.html", function(data) {
          $("#pageContent").html(data);

          //get table
          $("#getReviews").on("click", function() {

              $.getJSON("jsonDatabase/final.json", function(info) {

                  var rev = "<table class='table table-hover table-striped'>" +
                    "<tr><th>Product</th><th>Rating</th><th>Review</th></tr>";

                  $.each(info, function(index, item) {

                      rev += "<tr>" +
                        "<td>" + item.product + "</td>" +
                        "<td>" + item.rating + "</td>" +
                        "<td>" + item.review + "</td>" +
                        "</tr>";

                    }) //each function

                  rev += "</table>";
                  $("#info").append(rev);

                }) //get JSON

            }) //get reviews ends


        }) //get partials ends

    } //else if ends

    function sendConfirmation() {
      //make and object to record for database
      var order = {};
      //get all jquery objects
      var formData = $("input, select");
      formData.each(function() {
        //get ID
        var id = $(this).attr("id");
        //set the field and the value
        order[id] = $(this).val();
      })
      alert("Sending to our Database!" + JSON.stringify(order));

      $("#successMsg").html("Order Received!<br></br>");

    }
    //
  }

  //begin the program, get the homepage
  getPartial("home");




  //ready
})
