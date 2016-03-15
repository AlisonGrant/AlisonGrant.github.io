$.get("http://AlisonGrant.github.io/partials/footer.html", function(data) {

  $(document).ready(function() {

    $(".container").append(data);
    $(".container").fadeIn();

  })


})
