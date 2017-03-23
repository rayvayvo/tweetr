/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$( document ).ready(function() {


  $( "#submitTweet" ).on( "click", function( event ) {
        event.preventDefault();
    // let $textbox = $(".container textarea")
    let $tweetError = $("#tweetError")
    let character = parseInt($(".counter").text());

     if (character === 140) {
      $tweetError.text("write something to submit");
        setTimeout(errorMsg, 2000);

     } else if (character < 1){
      $tweetError.text("too long. shorten to try");
        setTimeout(errorMsg, 2000);

     } else {

        $tweetError.text("");
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: $("#newTweetText").serialize(),
          success: loadTweets
          })



console.log($("#newTweetText").serialize());

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

  $("#compose").click(function(){
    let newTweet = $(".new-tweet")

    if ($(newTweet).is(":visible")) {
    newTweet.slideUp();
    } else {
    newTweet.slideDown();
    $('#newTweetText').focus();
    }
});

  function renderTweets(tweetRend) {

  let newDOM = "";

    tweetRend.forEach((tweets) => {
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
  $('.new-tweet').after($tweet);

    return $tweet;
  };
  // var $tweet = createTweetElement(tweetData);
  // renderTweets(tweetData);

loadTweets();

});
