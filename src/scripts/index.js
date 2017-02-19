(function ($) {

  function handle_first_person_selection() {
    var listOfPersons1 = $(".person");

    // $.each(listOfPersons1, function (index, eachPerson) {
    //   eachPerson.click(function () {
    //     $("#selected-person1").find("p").val(eachPerson.id);
    //   })
    // });
    listOfPersons1.click(function () {
      $("#selected-person1").find("p").text(listOfPersons1[0].className);
    });
  }

  // $(".person").click(function () {
  //   var jqxhr = $.post( "/update/", { name: "jyotsna"}, function() {
  //     alert( "success" );
  //   })
  //     .done(function() {
  //       alert( "second success" );
  //     })
  //     .fail(function() {
  //       alert( "error" );
  //     })
  //     .always(function() {
  //       alert( "finished" );
  //     });
  // });
  handle_first_person_selection();
})(jQuery);
