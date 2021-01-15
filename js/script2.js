var jq =$.noConflict();
jq(document).ready(function() {
  jq("form#add-building").submit(function(event) {
    event.preventDefault();
    
    var inputtedBuildingID= jq("input#buildingID").val();
    var inputtedBuildingName = jq("input#buildingName").val();
  
  

    var building="<tr>"
    + "<td>" + inputtedBuildingID +"</td>"+
    "<td>" + inputtedBuildingName +"</td>"+
    "</tr>";

    jq("#buildings").append(building);
  });

}); 
   



























































