// this section is to change the image on each reload

var randomNO1= "images/" + "dice" + Math.ceil(Math.random()*6)  + ".png";
document.getElementById('img1').setAttribute('src',randomNO1);

var randomNO2= "images/" + "dice" + Math.ceil(Math.random()*6)  + ".png";
document.getElementById('img2').setAttribute('src',randomNO2);

// this section is to show which player wins
if(randomNO1>randomNO2){
  document.getElementsByTagName('h1')[0].innerHTML = "😈Player 1 wins🚩";
}
else if(randomNO2>randomNO1){
  document.getElementsByTagName('h1')[0].innerHTML = "🚩Player 2 wins😈";
}
else{
  document.getElementsByTagName('h1')[0].innerHTML = "😒🤝Draw🤝😞";
}
