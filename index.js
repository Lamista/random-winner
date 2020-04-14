var numberOfPlayers=3;

function randomize() {
  return (Math.floor(Math.random()*89)+10);
}

for (var i=0; i<numberOfPlayers; i++) {
  document.querySelectorAll(".player h3")[i].innerHTML=randomize();
}

if (document.querySelectorAll(".player h3")[0].innerHTML > document.querySelectorAll(".player h3")[1].innerHTML &&
document.querySelectorAll(".player h3")[0].innerHTML > document.querySelectorAll(".player h3")[2].innerHTML ){
    document.querySelectorAll(".player")[0].classList.add("winner");
    alert("Congratulations, Player 1! 🎉");
} else if (document.querySelectorAll(".player h3")[1].innerHTML > document.querySelectorAll(".player h3")[0].innerHTML &&
document.querySelectorAll(".player h3")[1].innerHTML > document.querySelectorAll(".player h3")[2].innerHTML){
    document.querySelectorAll(".player")[1].classList.add("winner");
    alert("Congratulations, Player 2! 🎉");
} else if (document.querySelectorAll(".player h3")[2].innerHTML > document.querySelectorAll(".player h3")[1].innerHTML &&
document.querySelectorAll(".player h3")[2].innerHTML > document.querySelectorAll(".player h3")[0].innerHTML){
    document.querySelectorAll(".player")[2].classList.add("winner");
    alert("Congratulations, Player 3! 🎉");
} else {
    document.querySelector("h1").innerHTML = "Bandyti dar kartą";
}
