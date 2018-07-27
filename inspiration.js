// Video Game Section
var videoList = ["A creative game where you create superhero pets", "A shooter game where you are dropped onto a planet of green aliens", "A adventure game where you save penguins form melting iceburgs"]
var videoGame = document.getElementById("video_game") //the button
videoGame.onclick = function generate(){
  var randomIndex = Math.floor(Math.random() * videoList.length);
  var randomElement = videoList[randomIndex];
  document.getElementById("game").innerHTML= ("Hello User. " + randomElement); //video game idea
}

// Book idea Section

// Inspirational Quotes Section

// Cute Animal Section
