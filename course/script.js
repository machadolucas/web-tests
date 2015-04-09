
function initialize() {

	$('.course').on('click', function(){
		var courseLink = linkPrefix + $(this).attr('data-course-code');
		window.open(courseLink);
	});

	$('.course').each(function() {
		$(this).prop('title',$(this).attr('data-name'));
	});

	orderOriginal();
}


function orderOriginal(){
	for(var s = 1; s <= uniqueOriginSemesters.length; s++){
		var selection = $("div[class*='course'][data-origin='s"+s+"']");
		selection.each(function(i){
			$(this).css('left', (s-1)*boxWidth + 'px');
			$(this).css('top', i*boxHeight + 'px');
		});
	}	
}


function orderExecuted(){
	for(var s = 1; s <= uniqueDoneSemesters.length; s++){
		var selection = $("div[class*='course'][data-done='s"+s+"']");
		selection.each(function(i){
			$(this).css('left', (s-1)*boxWidth + 'px');
			$(this).css('top', i*boxHeight + 'px');
		});
	}
	var selection = $("div[class*='course'][data-doing='true']");
	selection.each(function(i){
		$(this).css('left', (uniqueDoneSemesters.length)*boxWidth + 'px');
		$(this).css('top', i*boxHeight + 'px');
	});
	var selection = $("div[class*='course']:not([data-done*=s]):not([data-doing='true'])");
	selection.each(function(i){
		$(this).css('left', (uniqueDoneSemesters.length+1)*boxWidth + 'px');
		$(this).css('top', i*boxHeight + 'px');
	});
}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


var linkPrefix = "https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=";



var originSemesters = new Array();
$(".course").each(function(){
	if($(this).attr('data-origin') != undefined){
		originSemesters.push($(this).attr('data-origin'));
	}
});
var uniqueOriginSemesters = originSemesters.filter(onlyUnique);

var doneSemesters = new Array();
$(".course").each(function(){
	if($(this).attr('data-done') != undefined){
		doneSemesters.push($(this).attr('data-done'));	
	}
});
var uniqueDoneSemesters = doneSemesters.filter(onlyUnique);




var boxWidth = $('.course').outerWidth(true);
var boxHeight = $('.course').outerHeight(true);

initialize();
