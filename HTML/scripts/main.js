
let myVariable = document.querySelector("h1");
 
alert("hello!");
	

  function changeImage(src) {
    document.querySelector("img").src = "../My test image/" + src + ".png";
}
 
document.body.onmousedown = function () {
    changeImage("s0135_26_0");
    count += 1;
    document.querySelector("#pop").textContent = count;
}
document.body.onmouseup = function () {
    changeImage("s0135_27_0");
}
	
let count = 0;
