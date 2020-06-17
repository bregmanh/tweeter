$(document).ready(function () {
  //getting the length of the input in the textarea and updating the counter
  $('.new-tweet').on('keyup', function (event) {
    let tweetLength = $(this).find('textarea').val().length;
    $(this).find('.counter').html(function () {
      if (140 - tweetLength < 0) {
        $(this).css("color", "red");
        return (140 - tweetLength)
      }
      return (140 - tweetLength);
    });
  });
});