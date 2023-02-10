var countDownDate=x=now=timeLeft=countDownDate=days=hours=minutes=seconds=0;
          function runTimer() {
        
             countDownDate = moment("2024-07-26").toDate().getTime();
    
            // Update the count down every 1 second
             x = setInterval(function() {
              // Get todays date and time
               now = new Date().getTime();  
              timeLeft = countDownDate - now;
               days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
               hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
               minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
               seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
              // Display the result in the element with id="timer"
              document.getElementById("timer").innerHTML = days + "d " + hours + "h "
              + minutes + "m " + seconds + "s ";
            }, 1000);
          }
    
          $(document).ready(function() {
            $('head').append('<script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js"></script>');
    runTimer();     

   });