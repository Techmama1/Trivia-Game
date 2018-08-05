

$(document).on(click), "startButton", function(){
    $("#startButton").initializeClock('clockdiv', endtime); 
}
// --------- I tried out 3 different clocks, none worked!  it's most likely operator error-------

// var countDownClock ={
//     time: 3000,
//     reset: function(){
//         span.time=0;
//     }
//     start: function(){
//         counter = setInterval(Counter);
//     }
// }
//     function(){
//         clockdiv.time++;
//     }

// var converted = clockdiv.timeConverter(clockdiv.time);
//         $("#display").html(converted);
    

var initailizeClock = 0;
    
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new time());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000/60) % 60);
        var hours = Math.floor((t / 1000*60*60)) % 24);
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds' : seconds
        };
    }

    // took this out in instrcution box: var t = Time.parse(endtime) - Time.parse(new Time());

        function initializeClock(clockdiv, endtime){
            var clock = document.getElementById(id);
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector ('seconds');
            
            function updateClock(){
                var t = getTimeRemainign(endtime);

                    hoursSpan.innerHTML = t.hours;
                    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        }
       // update clock question: for the hours should i put = t.hours
                if(t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
        
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        

        //var deadline = new Date(Date.parse(new Date()) + 60 * 60 * 1000);
             //initializeClock('clockdiv, deadline');

        var converted = clockdiv.timeConverter(clockdiv.time);
        $("#display").html(converted);
             
        document.getElementById("clockdiv").innerHTML = minutes + "1 " + seconds + "30 ";


//  this is the previous clock below, messaging it out becuase it didn't work 

// var countDownTime = new Time("3000").getTime();
    //  var x = setInterval(function() {
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // document.getElementById("countDownClock").innerHTML = minutes + "1 " + seconds + "30 ";
    // )};   
// replaced the "m " with 1 and "s " with 30

    // If the count down is over, write some text 
        // if (distance < 0) {
        // clearInterval(x);
        // document.getElementById("countDownClock").innerHTML = "EXPIRED";
        //  }
        //  } , 1000);
    
    
      //----------------------  end of clock  -------------------

var compueterGuess = 0;
var userGuess = 0;
var correct = 0;
var incorrect = 0;
var unanswered= 0;
var playersTotalScore= 0;

document.onStartButton=function() {
    var userGuess = String.fromCharCode(event.startButton)();
}

    $('#questionOne').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   
    

    $('#questionTwo').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   
    

    $('#questionThree').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   
    

    $('#questionFour').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   
    

    $('#questionFive').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   


    $('#questionSix').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   
    

    $('#questionSeven').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   


    $('#questionEight').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   


    $('#questionNine').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   
    

    $('#questionTen').on("click", "answer" (function(){
        playersTotalScore+= 0;
         if (playersTotalScore === computerGuess[answerArray] ){
        correct++;
         $('#scoreBoard').text(playersTotalScore); 
        }else{( userGuess = computerGuess[answerArray])
        $('#scoreBoard').empty();
        incorrect++;
        $('#scoreBoard').text(playersTotalScore); 
       }   
    
   
    var questionArray = ["What movie does the given song belong to? Danger Zone", "What movie does the given song belong to? The Heat is On", "What movie does the given song belong to? Cruel Summer", "What movie does the given song belong to? In the Air Tonight", "What movie does the given song belong to? Party Man", "What movie does the given song belong to? Up Where We Belong", "What movie does the given song belong to? Power of Love", "What movie does the given song belong to? Eye of the Tiger", "What movie does the given song belong to? Don't You (Forget About Me)", "What movie does the given song belong to? The Glory of Love"];
    var answerArray = [["Top Gun","Terminator","Die Hard"], ["The Flash","Dirty Dancing", "Beverly Hills Cop"], ["First Blood", "Spaceballs", "The Karate Kid"], ["Tootsie","","Risky Business","Airplane"], ["An Officer and a Gentleman","Aliens","Poltergeist"], ["Pretty In Pink", "Back to the Future", "Nightmare on Elm St"], ["Scarface","Rocky III", "Big"], ["Beetlejuice", "The Breakfast Club","ET"],["Transformers:The Movie", "Caddyschack", "Sixteen Candles"] ["Goonies","Footloose","The Karate Kid Part II"]];
    var imageArray = ["<iframe src= "https:/giphy.com/embed/ERyJgJWzNiIlq" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https:/giphy.com/gifs/80s-music-ERyJgJWzNiIlq">via GIPHY</a></p>",];
    var computerGuess = ["a. Top Gun", "c. Beverly Hills Cop", "c. The Karate Kid", "b. Risky Business", "a. An Officer and a Gentlman", "b. Back to the Future", "b. Rocky III", "b. The Breakfast Club", 
    "D. The Karate Kid Part III"];

  