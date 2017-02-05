alert("do");
(function($){
  $(".person").click(function () {
    alert("clicked");
    var jqxhr = $.post( "/update/", { name: "jyotsna"}, function() {
      alert( "success" );
    })
      .done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        alert( "finished" );
      });
  });
})(jQuery);
