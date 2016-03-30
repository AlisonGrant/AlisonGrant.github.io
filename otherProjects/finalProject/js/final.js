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

  //EMAIL BUTTON
  /*$("#mailButton").click(function (){

    var email = prompt("Please enter your email")

    }

  }) */

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

          var myInput = $("#mySingleLineText").val();
          var myTextArea = $("#myTextArea").val();
          var mySelect = $("#mySelect").val();
          var myRadio = $("[name='material']:checked").val();
          var myCheckValues = [];
          //each is a jquery loop for objects/arrays
          $("[name='feedback']:checked").each(function() {
            myCheckValues.push($(this).val());
          });


          $("#log").append("<br>Value of input is: " + myInput);
          $("#log").append("<br>Value of textarea is: " + myTextArea);
          $("#log").append("<br>Value of select is: " + mySelect);
          $("#log").append("<br>Value of radio button is: " + myRadio);
          $("#log").append("<br>Value of checkbox is: " + myCheckValues);
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

        // get table
        function productReview() {
          $("#getReviews").on("click", function() {

              $.getJSON("http://AlisonGrant.github.io/otherProjects/finalProject/jsonDatabase/final.json", function(info) {
                  var rev = "<table class='table table-hover table-striped'>" +
                    "<tr><th>Product</th><th>Rating</th><th>Review</th></tr>";

                  $.each(info, function(index, item) {

                      rev += "<tr>" +
                        "<td>" + item.product + "</td>" +
                        "<td>" + item.rating + "</td>" +
                        "<td>" + item.review + "</td>" +
                        "</tr>";

                    }) //each function

                  product += "</table>";
                  $("#info").append(rev);

                  //alert(data);
                  //console.dir(data);

                }) //get JSON

            }) //button
        }
        //else ends
      })

      //if ends
    }
    // function ends
  }

  //begin the program, get the homepage
  getPartial("home");




  //ready
})
