jQuery(document).ready(function(){
//  jQuery('#sideBarClip').click(function(){
//    jQuery('.master').toggleClass('in');
//  });
//  jQuery('#sideBar').hover(function(){
//    jQuery('.master').addClass('in');
//  });
  jQuery('#sideBar').hover(function(){
    jQuery('.master').addClass('in');
  });

//  hover off function
//  , function(){
//    jQuery('.master').removeClass('in');
//    jQuery('.panel-collapse').removeClass('in').addClass('collapse').animate({'height':'0'});
//  }

  var timer;
  jQuery(document).mousemove(function() {
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = setTimeout(function() {
      jQuery('.master').removeClass('in');
      jQuery('.panel-collapse').removeClass('in').addClass('collapse').animate({'height':'0'});
    }, 3000)
  });
});
