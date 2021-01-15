var jq =$.noConflict();
jq(document).ready(function() {
  jq("form#add-building").submit(function(event) {
    event.preventDefault();
    //capture values from form
    var inputtedBuildingID= jq("input#buildingID").val();
    var inputtedBuildingName = jq("input#buildingName").val();
  
    //logic from inputs

    

    //output
    var building="<tr>"
    + "<td>" + inputtedBuildingID +"</td>"+
    "<td>" + inputtedBuildingName +"</td>"+
    "</tr>";

    jq("#buildings").append(building);
  });

}); 
   



























































