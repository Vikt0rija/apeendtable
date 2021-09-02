alert("Nėra paprasta su JavaScript.. :// Reikia man tikrai dar savarankiškai padirbėti..Padariau tik  mažą dalį.");

var add = document.getElementById('add');
var removefirst = document.getElementById('first');
var removelast = document.getElementById('last');
var inputValue1 = document.getElementById('inputValue1');
var inputValue2 = document.getElementById('inputValue2');
var inputValue3 = document.getElementById('inputValue3');
var names = document.getElementById('names');
var surname = document.getElementById('surname');
var age = document.getElementById('age');
var table = document.getElementById("table");
var row = document.getElementById('row');


add.addEventListener("click", addName);
function addName() {
  var element = document.createElement("p");
  element.innerHTML = " " + inputValue1.value;
  names.append(element);
  inputValue1.value = "";
}

add.addEventListener("click", addSurname);
function addSurname() {
  var element = document.createElement("p");
  element.innerHTML = " " + inputValue2.value;
  surname.append(element);
  inputValue2.value = "";
}

add.addEventListener("click", addAge);

function addAge() {
  var element = document.createElement("p");
  element.innerHTML = " " + inputValue3.value;
  age.append(element);
  inputValue3.value = "";
}
