$(document).ready(function() {
  // Define a function to retrieve a random quote
  function fetchQuote() {
    $.ajax({
      url: 'https://api.quotable.io/random',
      dataType: 'json',
      success: function(data) {
        $('#new-quote').text(data.content);
        $('#quote-author').text('- ' + data.author);
      },
      error: function() {
        alert('An error occurred while retrieving the quote.');
      }
    });
  }

  // Call the fetchQuote function on document load to display an initial quote
  fetchQuote();

  // Set a timer to fetch a new quote every 10 seconds
  setInterval(fetchQuote, 10000);
});