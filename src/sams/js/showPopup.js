

function showPopup(url) { 
     // newwindow=window.open(url,'concepts','height=250,width=800,top=200,left=300,resizable'); 
      //if (window.focus) {newwindow.focus()} 
	if($('#test').length == 0)
	{
      $("<div id='test' style='display:hidden'></div>").appendTo('body');
	}
	    $('#test').dialog({ autoOpen: false, buttons: { 'close': function() { $(this).dialog('close');} }});
            // load remote content
           $.ajax({
	      dataType: 'jsonp',
	      jsonp: 'jsonp_callback',
	      url: url,
	      success: function (msg) {
		  
		  $('#test').html(msg);
		  $('#test').dialog('open');
	      }
	      });
	      return false;
}
function showPopupUnder(url) { 
      newwindow=window.open(url,'objectives','height=190,width=800,top=450,left=300,resizable'); 
      if (window.focus) {newwindow.focus()} 
}
function showPopup2(url) { 
      newwindow=window.open(url,'Assessments','height=700,width=1024,top=50,left=300,resizable'); 
      if (window.focus) {newwindow.focus()} 
}
function showPopupCRT(url) { 
      newwindow=window.open(url,'CRT','height=450,width=650,top=50,left=300,resizable'); 
      if (window.focus) {newwindow.focus()} 
}
function showPopupPreviousSchedule(url) { 
      newwindow=window.open(url,'CRT','height=450,width=800,top=50,left=300,resizable, scrollable'); 
      if (window.focus) {newwindow.focus()} 
}