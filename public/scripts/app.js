/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$( document ).ready(function() {

  $(".new-tweet").slideUp();

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
  $(".tweet-articles").empty();
    tweetRend.forEach((tweets) => {

      newDOM += createTweetElement(tweets);
    })
  }

  function createTweetElement(tweets) {
    let time = Math.floor((new Date - (new Date(tweets.created_at)))/ 864000);

    if (time < 1) {
      time = `Created just now`
    } else if (time > 0 && time < 60) {
      time = `Created ${(time)} minutes ago`;
    } else if (time > 60 && time < 1440) {
      time = `Created ${Math.ceil((time)/60)} hours ago`;
    } else {
      time = `Created ${(time)/1400} days ago`;
    }
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
              <h4>${time}</h4>
              <img class="like" src="/images/like.jpg">
              <img class="share" src="/images/share.jpg">
              <img class="report" src="/images/report.png">
            </footer>
          </article>`;

//change the new Date to show how long ago it was posted instead of the extact time it was. eg: "posted 5 days ago"
//instead of "posted @ 12/12/2000"


  var $tweet = article;
  $('.new-tweet').after($tweet);

    return $tweet;
  };

loadTweets();

});
