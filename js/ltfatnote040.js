$(document).ready(function(){

$('a[data-slide="prev"]').click(function() {
  $('#myCarousel2').carousel('prev');
});

$('a[data-slide="next"]').click(function() {
  $('#myCarousel2').carousel('next');
});

var active_td

$("td.clickable").click(function(){
active_td = $(this);	
	
var tableId = $(this).parents('table').attr('id').substr(-1);

var audplayer = $("#audplayer" + tableId);
var audplayerstatus = $('#loadedfile' + tableId);

audplayer.find('source').remove();
audplayer.prepend('<source src="'+$(this).attr("data-file")+'" type="audio/ogg">');
audplayer.trigger("load");
audplayer.trigger("play");

$("td.clickable").removeAttr("style");

$(this).css("background-color","#03AFF4");
var filepath = $(this).attr("data-file");
audplayerstatus.html('<a href="'+filepath+'">'+filepath+'</a>');
});


$("a.clickable").click(function(){
	
	if (typeof active_td !== 'undefined'){
		var audplayer = $("#audplayer1");
		var audplayerstatus = $('#loadedfile1');
		
		audplayer.find('source').remove();
		audplayer.prepend('<source src="'+$(active_td).attr("data-file")+'" type="audio/ogg">');
		audplayer.trigger("load");
		audplayer.trigger("play");
		
		var filepath = $(active_td).attr("data-file");
		audplayerstatus.html('<a href="'+filepath+'">'+filepath+'</a>');
	}
});

//$('.playerdiv').stick_in_parent();
// .on("sticky_kit:stick", function(e) {
//     $("#stickytable").css("background-color","rgb(100,100,100)");
//     $("#stickytable").css("border-radius","5px");
//   })
//   .on("sticky_kit:unstick", function(e) {
//     $("#stickytable").removeAttr("style");
//   });
});



