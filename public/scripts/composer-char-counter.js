$( document ).ready(function() {
    console.log( "ready!" );

  $( ".container textarea" ).keyup(function() {
    let myCounter = this.parentNode.children[2]
    if (this.value.length > 140) {
      myCounter.style.color = "#ff0000";

    } else {
      myCounter.style.color = "#000000";
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


