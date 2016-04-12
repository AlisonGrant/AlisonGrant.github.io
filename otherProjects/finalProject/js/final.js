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

    //receiving home pageContent
    if (partial == "home") {
      $.get("partials/home.html", function(data) {
        $("#pageContent").html(data);
        $('.carousel').carousel()

      })

      //receiving collection pageContent
    } else if (partial == "collection") {
      $.get("partials/collection.html", function(data) {
          $("#pageContent").html(data);

          //go to order page when user clicks "buy now" button
          $(".buyButton").on("click", function() {
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
                      //alert("!!!");

                      $("input,select").filter(function() {
                        return !this.value;
                      }).closest("div").addClass("has-error");

                      //remove error once they have inputed information
                      $("input,select").filter(function() {
                        return this.value;
                      }).closest("div").removeClass("has-error");

                      var errors = $(".has-error");
                      //alert("errors" + errors.length);
                      if (errors.length < 1) {
                        sendConfirmation();
                      }

                    }) //click


                    //colour around single line text
                    // Card Holder's Name
                    $("#mySingleLineText").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });
                    //Credit Card Number
                    $("#mySingleLineText2").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText2").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });
                    // Card CVV
                    $("#mySingleLineText3").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText3").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });
                    // Expiry Date
                    $("#mySingleLineText4").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText4").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });
                    // Address
                    $("#mySingleLineText5").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText5").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });
                    // ZIP Code
                    $("#mySingleLineText6").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText6").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });
                    // State/Province
                    $("#mySingleLineText7").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText7").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });
                    // Country
                    $("#mySingleLineText8").on("focus", function() {
                      $(this).css("background-color", "f03d00");
                    })
                    $("#mySingleLineText8").on("blur", function() {
                      $(this).css("background-color", "#FFF");
                    });

                    // drop down of chain length choices
                  $("#mySelect").on("change", function() {
                    var val = $(this).val();

                  });

                  //user click button
                  $("#myButton").on("click", function() {

                    // once the button is clicked check to values inputed in the sngle line text
                    var myInput1 = $("#mySingleLineText").val();
                    var myInput2 = $("#mySingleLineText2").val();
                    var myInput3 = $("#mySingleLineText3").val();
                    var myInput4 = $("#mySingleLineText4").val();
                    var myInput5 = $("#mySingleLineText5").val();
                    var myInput6 = $("#mySingleLineText6").val();
                    var myInput7 = $("#mySingleLineText7").val();
                    var myInput8 = $("#mySingleLineText8").val();
                    var myTextArea = $("#myTextArea").val();
                    var mySelect = $("#mySelect").val();
                    var myRadio = $("[name='material']:checked").val();
                    var myCheckValues = [];
                    //each is a jquery loop for objects/arrays
                    $("[name='feedback']:checked").each(function() {
                      myCheckValues.push($(this).val());
                    });

                    // log inputed information onto screen
                    $("#log").append("<br>Card Holder's Name: " + myInput1);
                    $("#log").append("<br>Credit Card Number: " + myInput2);
                    $("#log").append("<br>Card CVV: " + myInput3);
                    $("#log").append("<br>Expiry Date: " + myInput4);
                    $("#log").append("<br>Address: " + myInput5);
                    $("#log").append("<br>ZIP Code: " + myInput6);
                    $("#log").append("<br>State/Province: " + myInput7);
                    $("#log").append("<br>country: " + myInput8);
                    $("#log").append("<br>Custom message: " + myTextArea);
                    $("#log").append("<br>Chain length: " + mySelect);
                    $("#log").append("<br>Material and pendant: " + myRadio);
                    $("#log").append("<br>Feedback: " + myCheckValues);
                  })


                  //mailButton - to sign up for newsletters
                  $("#mailButton").click(function() {
                    // prompt customer to input email address
                    var email = prompt("Please enter your email address");
                    var email2 = function(email) {
                      // once inputed, output the email and send the message
                      confirm("Thanks! Happy shopping!");
                    };
                    email2(email)

                    //end mailButton
                  })

                }) //get order

            }) //butButton click
        }) //get collection.html


        //receiving order pageContent
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
            //alert("!!!");

            $("input,select").filter(function() {
              return !this.value;
            }).closest("div").addClass("has-error");

            //remove error once they have inputed information
            $("input,select").filter(function() {
              return this.value;
            }).closest("div").removeClass("has-error");

            var errors = $(".has-error");
            //alert("errors" + errors.length);
            if (errors.length < 1) {
              sendConfirmation();
            }

          }) //click


          //colour around single line text
          // Card Holder's Name
          $("#mySingleLineText").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });
          //Credit Card Number
          $("#mySingleLineText2").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText2").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });
          // Card CVV
          $("#mySingleLineText3").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText3").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });
          // Expiry Date
          $("#mySingleLineText4").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText4").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });
          // Address
          $("#mySingleLineText5").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText5").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });
          // ZIP Code
          $("#mySingleLineText6").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText6").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });
          // State/Province
          $("#mySingleLineText7").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText7").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });
          // Country
          $("#mySingleLineText8").on("focus", function() {
            $(this).css("background-color", "f03d00");
          })
          $("#mySingleLineText8").on("blur", function() {
            $(this).css("background-color", "#FFF");
          });

          // drop down of chain length choices
        $("#mySelect").on("change", function() {
          var val = $(this).val();

        });


        //user click button
        $("#myButton").on("click", function() {

          // once the button is clicked check to values inputed in the sngle line text
          var myInput1 = $("#mySingleLineText").val();
          var myInput2 = $("#mySingleLineText2").val();
          var myInput3 = $("#mySingleLineText3").val();
          var myInput4 = $("#mySingleLineText4").val();
          var myInput5 = $("#mySingleLineText5").val();
          var myInput6 = $("#mySingleLineText6").val();
          var myInput7 = $("#mySingleLineText7").val();
          var myInput8 = $("#mySingleLineText8").val();
          var myTextArea = $("#myTextArea").val();
          var mySelect = $("#mySelect").val();
          var myRadio = $("[name='material']:checked").val();
          var myCheckValues = [];
          //each is a jquery loop for objects/arrays
          $("[name='feedback']:checked").each(function() {
            myCheckValues.push($(this).val());
          });

          // log inputed information onto screen
          $("#log").append("<br>Card Holder's Name: " + myInput1);
          $("#log").append("<br>Credit Card Number: " + myInput2);
          $("#log").append("<br>Card CVV: " + myInput3);
          $("#log").append("<br>Expiry Date: " + myInput4);
          $("#log").append("<br>Address: " + myInput5);
          $("#log").append("<br>ZIP Code: " + myInput6);
          $("#log").append("<br>State/Province: " + myInput7);
          $("#log").append("<br>Country: " + myInput8);
          $("#log").append("<br>Custom message: " + myTextArea);
          $("#log").append("<br>Chain length: " + mySelect);
          $("#log").append("<br>Material and pendant: " + myRadio);
          $("#log").append("<br>Feedback: " + myCheckValues);
        })




        //mailButton - to sign up for newsletters
        $("#mailButton").click(function() {
          // prompt customer to input email address
          var email = prompt("Please enter your email address");
          var email2 = function(email) {
            // once inputed, output the email and send the message
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
            //get info from JSON file
              $.getJSON("jsonDatabase/final.json", function(info) {
                //table type and headers
                  var rev = "<table class='table table-hover table-striped'>" +
                    "<tr><th>Product</th><th>Rating</th><th>Review</th></tr>";

                  $.each(info, function(index, item) {
                    // column information
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

$("#pageContent").fadeIn();
    } //else if ends


// after user fills out order form check to make sure all objects are inputed
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
      // display all information inputed in JSON string
      alert("Sending to our Database!" + JSON.stringify(order));
      //display this message after alert
      $("#successMsg").html("Order Received!<br></br>");

    }
    //
  }


  //begin the program, get the homepage
  getPartial("home");




  //ready
})
