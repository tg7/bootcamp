$( document ).ready(function() {
    
	$('#startButton').on('click', function() {
		alert('Clicked');

		// Variables

		var counter = 20;

					// Change the color of the button to red
					$(this).addClass('btn-danger');

			
		var intervalID = setInterval(function() {
					// Reduce the number of seconds by 1
						counter --;

					$('#startButton').html('number of seconds remaining: ' + counter);


					// Show the counter

					if (counter === 0) {

						alert('Time is up!');
						alert('You clicked ' + friendCounter + 'buttons');
						clearInterval(intervalID);

					};

					}, 1000);

				// Need to generate buttons dynamically using jquery


	});

	var names = ['chen', 'arnold', 'bob', 'todd'];

				for (var i = 0; i <names.length; i++) {
					// for each name create a button 
					var button = $('<button>');
					button.addClass('btn btn-default btn-margin btn-friend');
					button.text(names[i]);
					console.log('button', button);

					$('#friends').append(button);
				}

					var friendCounter = 0;
					$('.btn-friend').on('click', function() {

						// increase counter by 1	
						friendCounter ++;
					$('#click-count').html(friendCounter);

					// show the click-counter
					$('#click-count').html('Total Clicked ' + friendCounter);
					console.log('You\'ve clicked ' + friendCounter);

					//disable the click counter
					$(this).prop('disabled', true);

				});

});
 






