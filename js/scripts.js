$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputs = [$("input#person1").val(), $("input#person2").val(), $("input#noun").val(), $("input#exclamation").val(), $("input#verb").val(), $("input#action").val()];

    i = 1
    inputs.forEach(function(input) {
      $(".span" + i.toString()).text(input);
      i ++
    });

    $("#story").show();
  });
});