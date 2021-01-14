$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputtedHouseID= $("select#houseID").val();
    var inputtedMonth = $("select#month").val();
    var inputtedPaidOn = $("#paid").val();
    var inputtedBuilding =$("#building").val();
    var inputtedEmail = $("#email")
    var InputtedAmount = $("#amount").val();
    var rentDue=10000;

    var balance = parseInt(rentDue) - parseInt(InputtedAmount)

    if (balance>0){
      var color = "red";
    }else{
      var color = "green";
    }

    var payment="<tr style='color:"+color+"'>"+
    "<td>" + inputtedHouseID +"</td>"+
    "<td>" + inputtedMonth +"</td>"+
    "<td>" + rentDue +"</td>"+
    "<td>" + InputtedAmount +"</td>"+
    "<td>" + inputtedPaidOn +"</td>"+
    "<td>" + balance +"</td>"+
    "</tr>";

    $("#payments").append(payment);
  });

});

$(document).ready(function() {
    $('.add').click(function() {
        $('.show-onclick').show();
    });
});
