/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$( document ).ready(function() {

  let tweetData = [

  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
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
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
  ];

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function renderTweets(tweets) {
let newDOM = ""

  tweetData.forEach((tweets) => {
    newDOM += createTweetElement(tweets);

  })
return newDOM;
}

function createTweetElement(tweets) {

  var article = `<article class="tweet-articles">
          <header class="tweet-header">
          <img class="tweet-logo" src="${escape(tweets.user.avatars.small)}">
            <h2>${escape(tweets.user.name)}</h2>
            <span class="tweet-user">${escape(tweets.user.handle)}</span>
          </header>
          <body class= "tweet-body">
            <h3>${escape(tweets.content.text)}</h3>
          </body>
          <footer class="tweet-footer">
          <h4>${new Date(tweets.created_at)}</h4>
          </footer>
        </article>`;

// $("<div>").text(textFromUser);

var $tweet = article;
$('.container').append($tweet);

  return $tweet;
};
// var $tweet = createTweetElement(tweetData);
renderTweets(tweetData);


});
