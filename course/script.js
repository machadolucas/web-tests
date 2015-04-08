

var linkPrefix = "https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=";

initialize();

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
	
}

function orderExecuted(){
	
}