$.get("http://AlisonGrant.github.io/partials/footer.html", function(foot) {

  $(document).ready(function() {

    $(".container").append(foot);
    $(".container").fadeIn();

  })


})
