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
function pingpong(number) {
    var myNumber = [];
    for (var j = 1; j <= number; j++) {
        if (j % 15 === 0) {
            myNumber.push("PING PONG");
        } else if (j % 5 === 0) {
            myNumber.push("PONG");
        } else if (j % 3 === 0) {
            myNumber.push("PING");
        } else {
            myNumber.push(j);
        }
    };
    return myNumber;
};

$(document).ready(function() {
    $("form#Ping-Pong").submit(function(event) {
        event.preventDefault();
        $("li.res").empty();
        var j = parseInt($("input#Ping-Pong").val());
        var derivedNumber = pingpong(j) + '';
        var splitNumber = derivedNumber.split(",").join("<br>");
        $("div.result").addClass('result').append("<li class='res'>" + splitNumber + "</li>");
    });
});
