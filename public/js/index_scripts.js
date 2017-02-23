'use strict';

$(document).ready(function() {
	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	    };
	});
	$(".index-module-category").on("click", navigateCategory)
	$("#index-module-search").on("keyup", enterSearch)
});

function navigateCategory(e){
	$("#index-module-category-list .index-module-category").removeClass("active");
	$(e.target).addClass("active");
	$("#index-modules .index-module").css("display", (e.target.id)? "none": "inline-block");
	if(e.target.id){
		$("#index-modules ." + e.target.id).css("display", "inline-block");
	}
}

function enterSearch(e){
	$("#index-module-category-list .index-module-category").removeClass("active");
	$("#index-module-category-list .index-module-category.default").addClass("active");
	$("#index-modules .index-module").css("display", (e.target.value)? "none": "inline-block");
	if(e.target.value){
		$("#index-modules .index-module:contains(" + e.target.value + ")").css('display', 'inline-block');
		$("#index-modules .index-module." + e.target.value).css('display', 'inline-block');
	}
}
