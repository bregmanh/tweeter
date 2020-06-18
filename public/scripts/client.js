/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  loadTweets();
  submitForm();


});
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];
const createTweetElement = function (tweetData) {
  let $tweet = $(`<article class="tweet">
  <header>
    <div class="user">
      <img src="${tweetData.user.avatars}">
      <h5>Newton</h5>
    </div>
    <div class="user-name">${tweetData.user.handle}</div>
  </header>
  <div class="content">${escape(tweetData.content.text)}</div>
  <footer>${timePosted(tweetData.created_at)}
    <div class="footer-images"><img src="/images/flag.png">
      <img src="/images/heart.png">
      <img src="/images/retweet.png">
    </div>
  </footer>
</article>`);

  return $tweet;
};

const submitForm = function () {
  $('form').on("submit", function (evt) {
    evt.preventDefault();
    let tweet = $("textarea[name='text']").val();
    $('.error-msg').empty();

    if (tweet === "") {
      $('.error-msg').append(`<p><i class="fa fa-warning" aria-hidden="true"></i>Your tweet seems empty</p>`);
    } else if (tweet.length > 140) {
      $('.error-msg').append(`<p><i class="fa fa-warning" aria-hidden="true"></i>Your tweet is too long!</p>`);
    } else {
      $('.error-msg').empty();
      $('.error-msg').hide();
      $.ajax('/tweets', {
        method: 'POST',
        data: $(this).serialize(),
      }).then(() => {
        loadTweets();
        $("#tweet-text").val("");

      })
    }
  })
}

const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    let $result = createTweetElement(tweet);
    $('div.tweets-container').prepend($result);
  }
}

const loadTweets = function () {
  $.ajax({
    url: 'http://localhost:8080/tweets',
    method: 'GET',
    dataType: 'JSON',
  }).then(function (response) {
    renderTweets(response);
  })
};

const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const timePosted = function (date) {
  let now = new Date(Date.now());
  let posted = new Date(date);
  let seconds = now.getSeconds() - posted.getSeconds();
  if (seconds < 60) {
    return "less than 1min ago"
  } else if (seconds >= 60 && seconds < 3600) {
    let mins = Math.floor(seconds / 60);
    return `about ${mins} ago`
  } else if (seconds >= 3600 && seconds < 86400) {
    let hrs = Math.floor(seconds / 3600);
    return `about ${hrs} ago`

  } else {
    let days = Math.floor(seconds / 86400);
    return `about ${days} ago`

  }
}





