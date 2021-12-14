var button = document.getElementById("generate");
var input1 = document.getElementById("numberofletters");
var div = document.getElementById("div");

button.addEventListener("click", function (e) {
  div.innerHTML = "";
  if (input1.value < 1 || input1.value > 26) {
    alert("PLZ ENTER A VALID NUMBER");
    input1.value = "";
  } else {
    var value = input1.value;
    var list = randomUniqueNum(26, value);
    for (let i = 0; i < list.length; i++) {
      var chr = String.fromCharCode(65 + list[i] - 1);
      div.innerHTML +=
        "<button type = button id = " + chr + ">" + chr + "</button>" + " ";
    }
  }
});
div.addEventListener("click", function (e) {
  document.getElementById("pic_div").innerHTML = "";
  var cont = e.target.innerHTML.charCodeAt(0);
  if (cont > 64 && cont < 91) {
    var img = document.createElement("img");
    img.src = "Pics/" + e.target.innerHTML + ".jpg";
    document.getElementById("pic_div").appendChild(img);
  }
});

function randomUniqueNum(range, outputCount) {
  let arr = [];
  for (let i = 1; i <= range; i++) {
    arr.push(i);
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}
