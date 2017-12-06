var minion1 = document.getElementById('minion1');
var minion2 = document.getElementById('minion2');
var level = 1;
var result = 0;
var myTimer;



function start(){
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('startGame').style.display = 'none';
  grow();
}

function grow(){
  myTimer = setTimeout(function(){
    minion1.style.height = minion1.offsetHeight + 10 + 'px';
    minion2.style.height = minion1.offsetHeight + 20 + 'px';
    minion3.style.height = minion1.offsetHeight + 30 + 'px';
   if (minion1.offsetHeight == 600 || minion2.offsetHeight == 600 || minion3.offsetHeight == 600){
    lose();
    return false;

    }
    grow();

  },900 / level)

}

function lose(){
 clearTimeout(myTimer);

document.getElementById('overlay').style.display = 'block';
document.getElementById('lostGame').style.display = 'block';
document.getElementById('lostResult').innerText = result;
}

function smach(minion){
  result = result + 1;
  document.getElementById('result').innerText = "Result: " + result;
  if(result % 10 == 0){
    level = level + 1;
    document.getElementById('level').innerText = "Level: " + level;
  }
  var gnom = document.getElementById(minion);
  gnom.style.height = "200px";

}
function reset() {
  document.getElementById('overlay').style.display = "none";
  minion1.style.height = "100px";
  minion2.style.height = "150px";
  minion3.style.height = "200px";
  result = 0;
  level = 1;
  document.getElementById('result').innerText = "Result: 0";
  document.getElementById('level').innerText = "Level: 1";
  grow();
}
