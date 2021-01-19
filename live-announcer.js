jQuery(document).ready(function($){

  //Hide the alert box by default
  $('#wdwnt-alert-box').hide();
  
  $.getJSON('http://fastpass.wdwnt.com/upnt/broadcasts', check_broadcasts);

  function check_broadcasts(data) {

      var broadcast = data['completed'][0];

      if(broadcast) {
          if(broadcast['privacy']=="public") {
              title = broadcast['title'];
              url = 'https://youtube.com/v/' + broadcast['id'];

              content = '<a href="'+url+'">'+title+'</a>';

              $('#wdwnt-alert-box').html(content);
              $('#wdwnt-alert-box').show();
          }
      }
  }
})
