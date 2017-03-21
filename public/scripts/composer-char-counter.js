$( document ).ready(function() {
    console.log( "ready!" );
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
$( "main form textarea" ).keyup(function() {

    //this.value.length needs to change counter.value each time.
  console.log( this + "is this many chars: " + this.value.length );
  this.parentNode.children[2].innerText = (140 - this.value.length);

});

