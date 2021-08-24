/* var i = 0;
function clickPlusV1() {
    i++;
    document.getElementById('compteurV1').value = i;
}
function clicMinusV1() {
    i--;
    document.getElementById('compteurV1').value = i;
}
function clickZeroV1() {
    i = 0;
    document.getElementById('compteurV1').value = i;
}

var i = 0;
function clickEnterV2() {
    i++;
    document.getElementById('compteurV2').value = i;
}
function clickPlusV2() {
    i++;
    document.getElementById('compteurV2').value = i;
}
function clicMinusV2() {
    i--;
    document.getElementById('compteurV2').value = i;
}
function clickZeroV2() {
    i = 0;
    document.getElementById('compteurV2').value = i;
} */


var count = 0;

var counterDsp = document.querySelector(".counter");
var stepValue = document.querySelector(".ctrl__step");
var addButton = document.querySelector(".ctrl__plus");
var subButton = document.querySelector(".ctril__minus");
var resetButton = document.querySelector(".ctrl__reset");

addButton.addEventListener("click", add);
subButton.addEventListener("click", sub);
resetButton.addEventListener("click", reset);

function add() {
  count = count + parseInt(stepValue.value);
  counterDsp.innerHTML = count;
}

function sub() {
  count = count - parseInt(stepValue.value);
  counterDsp.innerHTML = count;
}

function reset() {
  count=0;
  counterDsp.innerHTML = count;
}