function myNo(){d.innerHTML+="*"}var b=[],r=0,scoreB=0,world="https://api.myjson.com/bins/4fmk1",check=document.getElementById("btnCheck"),start=document.getElementById("btnStart"),clear=document.getElementById("btnClear"),submit=document.getElementById("btnSubmit"),zeroB=document.getElementById("btn0B"),oneB=document.getElementById("btn1B"),twoB=document.getElementById("btn2B"),threeB=document.getElementById("btn3B"),fourB=document.getElementById("btn4B"),fiveB=document.getElementById("btn5B"),sixB=document.getElementById("btn6B"),sevenB=document.getElementById("btn7B"),eightB=document.getElementById("btn8B"),nineB=document.getElementById("btn9B"),d=document.getElementById("myNo"),worldRank=document.getElementById("worldRank");document.getElementById("divScoreB").innerHTML=scoreB,$.ajax({type:"GET",url:world,dataType:"json",success:function(n){str=JSON.stringify(n),obj=JSON.parse(str),worldRank.innerHTML=obj.eight.join("<br>")}}),submit.onclick=function(){var n=obj.eight.length-1,e=obj.eight[n];scoreB>e&&(obj.eight[n]=scoreB,obj.eight.sort(function(n,e){return e-n}),str1=JSON.stringify(obj),$.ajax({url:world,type:"PUT",data:str1,contentType:"application/json; charset=utf-8",dataType:"json",success:function(n){worldRank.innerHTML=obj.eight.join("<br>"),document.getElementById("btnSubmit").disabled=!0}}))},start.onclick=function(){r=Math.floor(9e7*Math.random())+1e7,document.getElementById("divrNo").style.display="block",document.getElementById("divrNo").innerHTML=r,$("#divrNo").fadeOut(3e3)},check.onclick=function(){function n(){bStr==r&&""!=bStr?scoreB+=1:scoreB>0&&""!=bStr&&(scoreB-=1),document.getElementById("divScoreB").innerHTML=scoreB}document.getElementById("divrNo").innerHTML=r,bStr=b.join(""),n(),b=[],d.innerHTML=""},clear.onclick=function(){b=[],d.innerHTML=""},zeroB.onclick=function(){b.push(0),myNo()},oneB.onclick=function(){b.push(1),myNo()},twoB.onclick=function(){b.push(2),myNo()},threeB.onclick=function(){b.push(3),myNo()},fourB.onclick=function(){b.push(4),myNo()},fiveB.onclick=function(){b.push(5),myNo()},sixB.onclick=function(){b.push(6),myNo()},sevenB.onclick=function(){b.push(7),myNo()},eightB.onclick=function(){b.push(8),myNo()},nineB.onclick=function(){b.push(9),myNo()};
