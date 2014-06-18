$(document).ready(function(){
  //  Award Builder Link
  $("#awardBuilderLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#awardBuilderLink").siblings().removeClass('active');
      $("#awardBuilderLink").addClass('active');
      $(".rightBar").load("awardBuilder.html");
    });
  });

//  Poker Bad Beat Jackpot Link
  $("#jackpotLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#jackpotLink").siblings().removeClass('active');
      $("#jackpotLink").addClass('active');
      $(".rightBar").load("PokerBadBeatJackpot.html");
    });
  });

//  Slot Inventory Link
  $("#slotInventoryLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#slotInventoryLink").siblings().removeClass('active');
      $("#slotInventoryLink").addClass('active');
      $(".rightBar").load("slotInventory.html");
    });
  });

//  Manage Content Link
  $("#manageContentLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#manageContentLink").siblings().removeClass('active');
      $("#manageContentLink").addClass('active');
      $(".rightBar").load("manageContent.html");
    });
  });

//  Tournament Builder Link

  $("#tournamentBuilderLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#tournamentBuilderLink").siblings().removeClass('active');
      $("#tournamentBuilderLink").addClass('active');
      $(".rightBar").load("tournamentBuilder.html");
    });
  });

//  adPression Management Link
  $("#pressionLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#pressionLink").siblings().removeClass('active');
      $("#pressionLink").addClass('active');
      $(".rightBar").load("adPressionManagement.html");
    });
  });

  //  Refer a Friend Link
  $("#referFriendLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#referFriendLink").siblings().removeClass('active');
      $("#referFriendLink").addClass('active');
      $(".rightBar").load("referFriend.html");
    });
  });

  //  Map Management Link
  $("#mapManagementLink").click(function() {
    $('#loader').show();
    $('#loader').fadeOut(1000, function(){
      $("#mapManagementLink").siblings().removeClass('active');
      $("#mapManagementLink").addClass('active');
      $(".rightBar").load("mapManagement.html");
    });
  });





//  Inactive Fieldset
  var fieldSwitch = $('.fieldSwitch');
  var legendSwitch = $('.fieldset legend input');
  fieldSwitch.find('input, select').prop('disabled', true);
  legendSwitch.on('click', function(){
    if($(this).is(':checked')){
      $(this).parent().next('.fieldSwitch').find('input, select').prop('disabled', false);
    }
    else{
      $(this).parent().next('.fieldSwitch').find('input, select').prop('disabled', true);
    }
  });





//  var fieldSwitch = $('.fieldSwitch');
//  var legendSwitch = $('.fieldset legend input');
//  fieldSwitch.find('input').prop('disabled', true);
//
//  if(legendSwitch.is(':checked')){
//    alert('checked');
//  }
//  else{
//    alert('not checked');
//  }

});


//page loader
$(window).load(function(){
  $('#loader').fadeOut(2000);
});