$(document).ready(function() {
  // Defines a function to retrieve a random quote
  function fetchQuote() {
    $.ajax({
      url: 'https://api.quotable.io/random',
      dataType: 'json',
      success: function(data) {
        $('#text').text(data.content);
        $('#author').text('- ' + data.author);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data.content + '" ' + data.author));
      },
      error: function() {
        alert('An error occurred while retrieving the quote.');
      }
    });
  }

  // Calls the fetchQuote function on document load to display an initial quote
  fetchQuote();

  // Sets up a click event listener for the new-quote button
  $('#new-quote').on('click', function() {
    fetchQuote();
  });
});
