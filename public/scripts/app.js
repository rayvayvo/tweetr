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

  $( "#submitTweet" ).on( "click", function( event ) {
        event.preventDefault();
        console.log( $( this ).serialize() );
    // let $textbox = $(".container textarea")
    let $tweetError = $("#tweetError")
    let character = parseInt($(".counter").text());
    // let counter = parseInt(string, radix);

     if (character === 140) {
      $tweetError.text("write something to submit");
        setTimeout(errorMsg, 2000);

     } else if (character < 1){
      $tweetError.text("too long. shorten to try");
        setTimeout(errorMsg2, 2000);

     } else {
        $tweetError.text("");

     }

    function errorMsg2(){
    $tweetError.text("");
    }

    function errorMsg(){
    $tweetError.text("");
    }
  });



  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function loadTweets() {

        $.ajax({
          url: '/tweets',
          method: 'GET',
          success: renderTweets
          })
  }


loadTweets();

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

//change the new Date to show how long ago it was posted instead of the extact time it was. eg: "posted 5 days ago"
//instead of "posted @ 12/12/2000"

// $("<div>").text(textFromUser);

  var $tweet = article;
  $('.container').append($tweet);

    return $tweet;
  };
  // var $tweet = createTweetElement(tweetData);
  // renderTweets(tweetData);


});
