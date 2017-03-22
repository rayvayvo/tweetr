$( document ).ready(function() {
    console.log( "ready!" );

    const $submitTweet = $('#submitTweet')
    // $submitTweet.attr("disabled", true);

  $( ".container textarea" ).keyup(function() {
    let myCounter = this.parentNode.children[3]


    if (this.value.length > 140) {
      myCounter.style.color = "#ff0000";
      // $submitTweet.attr("disabled", true);

    }else if (this.value.length === 0) {
      myCounter.style.color = "#000000";
      // $submitTweet.attr("disabled", true);

    } else {
      myCounter.style.color = "#000000";
      // $submitTweet.attr("disabled", false);
    }
      myCounter.innerText = (140 - this.value.length);
  });
});

// $( "main form textarea" ).keypress(function() {
//   console.log( "Handler for .keypress() called." );
// });

// $( "main form textarea" ).blur(function() {
//   console.log( "Handler for .blur called." );
// });

// $( "main form textarea" ).keydown(function() {
//   console.log( "Handler for .down called." );
// });


