// $(document).ready(function() {
//     $("form#Ping-Pong").submit(function(event) {
//       event.preventDefault();
//       var number = parseInt($("input#number").val());
//       var result = multiple(number);
//       $("#result").text(result);
//     });
//   });
//   var multiple = function(number) {
//     if (number % 3===0) {
//       return true;
//     }
//   };
//   $(".number").text(number);
//
//         if (!result) {
//           $(".ping").text("ping");
//         $("#result").show();
//       });
//     });
$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();
        display = parseInt($("input#number").val());
        var output = count(display);

    });
});

// business logic
var display;
var count = function (){
  for (var i = 1; i <= display; i++) {
        // if the number is divisible by 3, write "Ping"
        //  if ( i % 3 === 0) {
        //   $(".Push").append("<li>"+"ping"+"</>");
        //   return "Ping";
        // }
    $("#result").append("<li>"+i+"</li>");
  }
}
