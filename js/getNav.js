$.get("http://AlisonGrant.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);

  })


})
