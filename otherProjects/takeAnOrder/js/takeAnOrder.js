$(document).ready(function() {

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

});
