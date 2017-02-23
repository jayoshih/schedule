'use strict';

var new_item_index = 0;

$(document).ready(function() {
	$(".todo_item").on("click", stopEvents);
	$("#add_to_do").on("click", stopEvents);
	$(".remove_item").on("click", removeItem);
	$("#add_todo_textbox").on("keypress", enterTodo)
	$("#add_todo_button").on("click", submitTodo)
})

function addTodo(item){
	new_item_index ++;
	$("#add_to_do").before("<li class='truncate todo_item'>" +
		"<a><input type='checkbox' id='check_new_" + new_item_index + "' class='todo_check'/>" +
		"<label class='truncate'  title='" + item + "' for='check_new_" + new_item_index + "'>&nbsp;&nbsp;" + item + "</label>" +
		"</a></li>");
	$(".todo_item").on("click", stopEvents);
	$("#add_todo_textbox").val("");
}

function enterTodo(e){
	var code = e.keyCode ? e.keyCode : e.which;
	if(code == 13 && e.target.value){
		addTodo(e.target.value);
	}
}

function submitTodo(e){
	if($("#add_todo_textbox").val()){
		addTodo($("#add_todo_textbox").val());
	}
}


function stopEvents(e){
	e.stopPropagation();
}

function removeItem(e){
	stopEvents(e);
	console.log($(e.target).parent("li"))
	$(e.target).parent("li").remove();
}