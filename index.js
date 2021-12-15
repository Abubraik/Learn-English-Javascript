var button = document.getElementById("generate");
var input1 = document.getElementById("numberofletters");
var div = document.getElementById("div");

//load event
window.addEventListener("load", function () {
  new Interactions('Load', 'Window', getTime());
});

//unload event
window.addEventListener("unload", function () {
  new Interactions('Unload','Window', getTime());
});

//Generate button event
button.addEventListener('click', function (e) {
  div.innerHTML = "";
  if (input1.value < 1 || input1.value > 26) {//check of number is valid
    alert("PLZ ENTER A VALID NUMBER");
    input1.value = "";
  } else {
    var value = input1.value;
    var list = randomUniqueNum(value);
    for (let i = 0; i < list.length; i++) {
      var chr = String.fromCharCode(64 + list[i]);//convert ASCII to Char
      div.innerHTML += `<button type = button id =${chr}>${chr}</button> `;//create buttun
    }
    new Interactions('Click', 'Generate', getTime());
  }
});

//Get pictures out for viewing
div.addEventListener('click', function (e) {
  document.getElementById("pic_div").innerHTML = "";
  var cont = e.target.innerHTML.charCodeAt(0);//Get the character
  if (cont > 64 && cont < 91) {
    var img = document.createElement("img");
    img.src = `Pics/${e.target.innerHTML}.jpg`;//specify imageg source dynamically
    document.getElementById("pic_div").appendChild(img);
    new Interactions('Click', e.target.innerHTML, getTime());
  }
});

//Generate random characters
function randomUniqueNum(outputCount) {
  let arr = [];
  let range = 26;
  for (let i = 1; i <= range; i++) {//create array from 1 - 26
    arr.push(i);
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {//generate random numbers
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}

//Store interactions in Localstorage
function Interactions(event_type, event_target, event_time) {
  this.event_type = event_type;
  this.event_target = event_target;
  this.event_time = event_time;

  this.display = function () {
    return `${this.event_type} - ${this.event_time}`;
  };
  localStorage[this.display()] = this.event_target;
}
//Get time function
function getTime() {
  var today = new Date();
  let current_time = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()} , ${today.toDateString()}`;
  return current_time;
}
/*for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    if(value.equals(desired_value))
    console.log(key + " => " + value);
}
*/