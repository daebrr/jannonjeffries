

// House rules functions

$(document).ready(function(){
$("#houseRulesClosed").click(function() {
  $("#houseRulesOpened").removeClass("hide");
});
$(".close").click(function() {
  $("#houseRulesOpened").addClass("hide");
});

});


// Decline flow functions

$(document).ready(function(){
  $("#declineFlowClosed").click(function() {
    $("#declineFlowOpened").removeClass("hide");
  });
  $(".close").click(function() {
    $("#declineFlowOpened").addClass("hide");
  });
  
  });


// Cancel change functions

$(document).ready(function(){
  $("#cancelChangeClosed").click(function() {
    $("#cancelChangeOpened").removeClass("hide");
  });
  $(".close").click(function() {
    $("#cancelChangeOpened").addClass("hide");
  });
  
  });


// Inbox functions

$(document).ready(function(){
  $("#inboxClosed").click(function() {
    $("#inboxOpened").removeClass("hide");
  });
  $(".close").click(function() {
    $("#inboxOpened").addClass("hide");
  });
  
  });