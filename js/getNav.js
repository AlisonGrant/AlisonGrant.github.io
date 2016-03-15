$.get("http://AlisonGrant.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
})
})
$.get("http://AlisonGrant.github.io/partials/footer.html", function(foot) {

  $(document).ready(function() {

    $(".container").append(foot);
    $(".container").fadeIn();

  })


})
