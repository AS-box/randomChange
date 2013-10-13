$(function(){
	for(i=0; i<10; i++){
		$(".square_wrap").append("<ul class='square_list' id='squareList_"+ i +"'></ul>");
	}

	for(i=0; i<10; i++){
		$(".square_list").append("<li class='squares'></li>");
	}

	var squareObj = $(".square_wrap").find(".squares");
	for(i=0; i<squareObj.length; i++){
		$(".squares").attr("id",function(i){
			return i ;
		});
	}

	var changestyle = function(){
		$(".squares").removeClass("selected");
		var randomNum = Math.floor(Math.random()*100);
		$("#"+randomNum).addClass("selected");
		setTimeout(function() {
			changestyle();
		}, 1000);
	};
	changestyle();
	
});