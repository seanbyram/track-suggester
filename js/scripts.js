
// backend logic






// user interface logic

$(document).ready(function() {

  $("#survey").submit(function(event){

    var select1 = $("#select1").val();
    var select2 = $("#select2").val();
    var select3 = $("#select3").val();
    var select4 = $("#select4").val();
    var select5 = $("#select5").val();

    var allSelects = [select1, select2, select3, select4, select5];
    console.log(allSelects);

    if (select1 === "No") {
        $("#result").text(" Start with our Intro to Programming Track")
    } else if (select2 === "No") {
        $("#result").text(" Try our Javascript Track")
    } else if (select3 === "Yes") {
        $("#result").text(" Try our CSS/Design Track")
    } else if (select4 === "Yes") {
        $("#result").text(" Try our C# Track")
    } else if (select5 === "Yes") {
        $("#result").text(" Try our Java Track")
    } else {
      $("#result").text(" Try our PHP or Ruby/Rails Track")
    }


    event.preventDefault();

  });

  function answerTree() {

    if (select1 === "No. What is programming?") {
      $("#result").text("Start with our Intro to Programming Track")
    } else if (select1 === "Yes") {

    }

  }



  });
