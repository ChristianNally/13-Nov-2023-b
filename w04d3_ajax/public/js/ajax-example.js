// console.log('this is front-end');
// alert('monkey fuzz');

// console.log('console', console);
// console.log('window', window);
// console.log('document', document);
// console.log('navigator', navigator);

$(document).ready(function(){
	$('form').on('submit', function(event){
		event.preventDefault();

		$.ajax({
			url: 'https://www.gov.uk/bank-holidays.json',
			method: 'GET'
		})
		.then((response) => {
			console.log('response.scotland.events', response.scotland.events);

			const $newTable = $('<table></table>');
			$newTable.append('<tbody id="holiday-table"><tr><th>Title</th><th>Bunting</th></tr></tbody>');
			$('#display').append($newTable);

			for (let event of response.scotland.events) {
				let bunting = '';
				if (event.bunting) {
					bunting = '🏵';
				}
				$('#holiday-table').append(`<tr><td>${event.title}</td><td>${bunting}</td></tr>`);
			}
		})
		.catch((error) => {
			console.log('error', error);
		});

	});
});
