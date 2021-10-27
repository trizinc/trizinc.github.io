var b = [], r = 0, scoreB = 0; 
var world = "https://myjson.dit.upm.es/api/bins/1jgc"; // {"eight":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]}
var check = document.getElementById("btnCheck");
var start = document.getElementById("btnStart");
var clear = document.getElementById("btnClear");
var submit = document.getElementById("btnSubmit");
var zeroB = document.getElementById("btn0B");
var oneB = document.getElementById("btn1B");
var twoB = document.getElementById("btn2B");
var threeB = document.getElementById("btn3B");
var fourB = document.getElementById("btn4B");
var fiveB = document.getElementById("btn5B");
var sixB = document.getElementById("btn6B");
var sevenB = document.getElementById("btn7B");
var eightB = document.getElementById("btn8B");
var nineB = document.getElementById("btn9B");
var d = document.getElementById("myNo");
var worldRank = document.getElementById("worldRank");

document.getElementById("divScoreB").innerHTML = scoreB;

	$.ajax({
	        type: "GET",
			url: world,
			dataType: "json",
			success : function(data) {
			str = JSON.stringify(data);
			obj = JSON.parse(str);
			worldRank.innerHTML = obj.eight.join("<br>");
} 	
});

submit.onclick = function() {
	var lastIndex = obj.eight.length - 1;
	var lowestScore = obj.eight[lastIndex];
		
	if(scoreB > lowestScore) {
//	obj.eight = [];
	obj.eight[lastIndex] = scoreB;
	obj.eight.sort(function(a, b){return b-a});

	str1 = JSON.stringify(obj);

	$.ajax({
		url: world,
		type:"PUT",
		data: str1,	
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		success: function(data){
		worldRank.innerHTML = obj.eight.join("<br>");
		document.getElementById("btnSubmit").disabled = true;
   }
  });
 }
}


start.onclick = function() {
r = Math.floor(Math.random() * (90000000)) + 10000000;
document.getElementById("divrNo").style.display = "block";
document.getElementById("divrNo").innerHTML = r;
$('#divrNo').fadeOut(3000);
}

check.onclick = function() {
	document.getElementById("divrNo").innerHTML = r;
	bStr = b.join("");				
	
	function checkB() {
		if(bStr == r && bStr != "") {
			scoreB += 1; 
}		else if(scoreB > 0 && bStr != "") {
			scoreB -= 1; 
} 
	document.getElementById("divScoreB").innerHTML = scoreB;
}
	checkB();
	b = [];
	d.innerHTML = "";	
} 

clear.onclick = function() {
	b = [];
	d.innerHTML = "";
}

function myNo() {
	d.innerHTML += "*";
}

zeroB.onclick = function() {b.push(0); myNo();}
oneB.onclick = function() {b.push(1); myNo();}
twoB.onclick = function() {b.push(2); myNo();}
threeB.onclick = function() {b.push(3); myNo();}
fourB.onclick = function() {b.push(4); myNo();}
fiveB.onclick = function() {b.push(5); myNo();}
sixB.onclick = function() {b.push(6); myNo();}
sevenB.onclick = function() {b.push(7); myNo();}
eightB.onclick = function() {b.push(8); myNo();}
nineB.onclick = function() {b.push(9); myNo();}
