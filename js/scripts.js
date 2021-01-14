$(document).ready(function() {
  $("form#add-building").submit(function(event) {
    event.preventDefault();
    //capture values from form
    var inputtedBuildingID= $("input#buildingID").val();
    var inputtedBuildingName = $("input#buildingName").val();
  
    //logic from inputs

    

    //output
    var building="<tr>"
    + "<td>" + inputtedBuildingID +"</td>"+
    "<td>" + inputtedBuildingName +"</td>"+
    "</tr>";

    $("#buildings").append(building);
  });

}); 
   




























































































