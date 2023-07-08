var countDownDate = new Date("July 08, 2023 18:00:00").getTime();

// Update the count down every 1 second   
var x = setInterval(function () {
 
  // Get today's date and time
  var now = new Date().getTime();  
 
  // Find the distance between now and the count down date  
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo" 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);  

// DARK AND LIGHT MODE
// $( ".inner-switch" ).on("click", function() {
//   if( $( "body" ).hasClass( "dark" )) {
//     $( "body" ).removeClass( "dark" );
//     $( ".inner-switch" ).text( "OFF" );
//   } else {
//     $( "body" ).addClass( "dark" );
//     $( ".inner-switch" ).text( "ON" );
//   }
// });