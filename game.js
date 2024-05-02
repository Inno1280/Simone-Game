// Color array
var buttonColors = ["red" , "blue" , "green" , "yellow"];

// 3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow"
var gamePattern = [];

var userClickedPattern = [];

// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

// 2. Create a new variable called level and start at level 0
level = 0;

// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function start(){

    if (!started){
        $("#level-title").html("Level " + level);
        nextSequence();
        started = true;
    }
});

// 1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor); 

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success")

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence()
            }, 1000);
        } 

    } else {
        console.log("Wrong");
        playsound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").html("Game Over, Press Any key to Restart");

        startOver();
    }

    
}

// function to restart the game when its game-over
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    
}

// 1. Inside game.js create a new function called nextSequence()
function nextSequence(){
    userClickedPattern = [];

    level++;

    $("#level-title").html("Level " + level);
    // 2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);

    // 4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColor = buttonColors[randomNumber];


//  Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColor);


    //1. animate a flash to the button selected in step 1.
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); 


    //3.play the sound for the button colour selected in step 1.
    playsound(randomChosenColor);
    
    // animatePress(randomChosenColor);
}

// step 5
function playsound(name) {
    var sounds = new Audio ("sounds/" + name + ".mp3");
    sounds.play();
}

// 1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel




















// // alert("Hello"); 

// buttonColors = ["red" , "blue" , "green" , "yellow"]
// gamePattern = []
// userClickedPattern = []

// function nextSequence(){
//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColor = buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);
    
//     level++;
//     $("#level-title").html("level " + level);

//     $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
//     sound.play(randomChosenColor);
// }
// //#region
// // Create audio elements for each button sound

// var redSound = new Audio();
// redSound.src = "./sounds/red.mp3" 

// var blueSound = new Audio();
// blueSound.src = "./sounds/blue.mp3"

// var greenSound = new Audio();
// greenSound.src = "./sounds/green.mp3" 

// var yeallowSound = new Audio();
// yeallowSound.src = "./sounds/yellow.mp3" 
// //#endregion

// // create a function to animate the flash effect on the green button
// function flashEffect(color, sound) {
//     $("#" + color).fadeOut(100).fadeIn(100);   
//     sound.play();
// }

// // create a funtion to animate the flash effect on all the buttons.

// // green
// $("#green").click(function(){
//     flashEffect("green" , greenSound);
// }); 

// // Red
// $("#red").click(function(){
//     flashEffect("red" , redSound);
// });

// // blue
// $("#blue").click(function(){
//     flashEffect("blue" , blueSound);
// }); 

// // yellow
// $("#yellow").click(function() {
//     flashEffect("yellow" , yeallowSound); 
// }); 

// // event handler

// function eventHandler(event){
//     var userChosenColor = event.target.id; 
//     userClickedPattern.push(userChosenColor);
    
//     // console.log("The user chose this color: " + userChosenColor); 
//     // console.log(userClickedPattern);
// }

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//         console.log("success")

//         if(userClickedPattern.length === gamePattern.length){
//             setTimeout(function(){
//                 nextSequence();
//             }, 1000);
//         }
//     } else {
//         console.log("Wrong")
//     }

// }

// $("#red").click(function(event) {
//     eventHandler(event); 
//     animatePressed("red");  
// });

// $("#green").click(function(event){
//     eventHandler(event);
//     animatePressed("green");
// });

// $("#blue").click(function(event) {
//     eventHandler(event);
//     animatePressed("blue");
// });


// $("#yellow").click(function(event) {
//     eventHandler(event);
//     animatePressed("yellow");
// });

// function animatePressed(currentColor) {
//     $("#" + currentColor).addClass("pressed");

//     setTimeout(function(){
//         $("#" + currentColor).removeClass("pressed")
//     }, 100);
// }

// // tracking if the game have started
// var started = false;

// // the begining of the level

// var level = 0;

// // keypress event
// $(document).keypress(function() {
//     if (!started) {
//         $("#level-title").html("Level " + level);
//         nextSequence();
//         started = true;
//     }
// });

// // checking if the answer is corret


 



