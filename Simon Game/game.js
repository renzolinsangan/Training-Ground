var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
    if(!started)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    classFunction("id", userChosenColour, "pressed", 100);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
    {
        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else
    {
        playSound("wrong");
        classFunction("html", "body", "game-over", 200);
        $("#level-title").text("Game Over, Press any Key to Restart.");
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    animateButton(randomChosenColour);
    playSound(randomChosenColour);
}

function animateButton(chosenColour) {
    $("#" + chosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(fileName) {
    var audio = new Audio("sounds/" + fileName + ".mp3");
    audio.play();
}

function classFunction(type, tag, name, timer) {
    let jQueryTag = "";

    switch(type) {
        case "html" : 
            jQueryTag = tag;
            break;
        case "class" : 
            jQueryTag = "." + tag;
            break;
        case "id" :
            jQueryTag = "#" + tag;
            break;
        default : 
            console.log("Unknown Type: " + type);
            jQueryTag = tag;
    }

    $(jQueryTag).addClass(name);
    setTimeout(() => {
        $(jQueryTag).removeClass(name);
    }, timer);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}