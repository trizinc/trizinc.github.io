function com (symbol, name, unit, contract, price, buying, selling, quantity, total, margin, pnl) {
this.symbol = symbol;
this.name = name;
this.unit = unit;
this.contract = contract;
this.price = price;
this.buying = buying;
this.selling = selling;
this.quantity = quantity;
this.total = total;
this.margin = margin;
this.pnl = pnl;
}

var header = new com('Symbol', 'Goods','Unit', 'Contract Size', 'Market Price','Buying Price', 'Selling Price', 'Quantity', 'Contract Value', 'Margin 5%', 'Profit /Loss');
var headerAll = [header];

var gold = new com('GC=F','Gold','t oz.', 100, 0, 0, 0, 0, 0, 0, 0);
var silver = new com('SI=F','Silver','t oz.', 5000, 0, 0, 0, 0, 0, 0, 0);
var platinum = new com('PL=F','Platinum','t oz.',50, 0, 0, 0, 0, 0, 0, 0);
var copper = new com('HG=F','Copper','lb.',25000, 0, 0, 0, 0, 0, 0, 0);

var metals = [gold, silver, platinum, copper];

var crudeOil = new com('CL=F', 'Crude Oil', 'bbl.',1000, 0, 0, 0, 0, 0, 0, 0);
var naturalGas = new com('NG=F', 'Natural Gas', 'MMBtu',10000, 0, 0, 0, 0, 0, 0, 0);

var energy = [crudeOil, naturalGas]; 

var corn = new com('C=F', 'Corn', 'bu', 5000, 0, 0, 0, 0, 0, 0, 0);
var oats = new com('O=F', 'Oats', 'bu.', 5000, 0, 0, 0, 0, 0, 0, 0);
var wheat = new com('KW=F', 'Wheat', 'bu.', 5000, 0, 0, 0, 0, 0, 0, 0);
var soybeans = new com('S=F', 'Soybeans', 'bu.', 5000, 0, 0, 0, 0, 0, 0, 0);
var coffee = new com('KC=F', 'Coffee', 'lb.', 37500, 0, 0, 0, 0, 0, 0, 0);
var orangeJuice = new com('OJ=F', 'Orange Juice', 'lb.', 15000, 0, 0, 0, 0, 0, 0, 0);
var sugar = new com('SB=F', 'Sugar', 'lb.',112000, 0, 0, 0, 0, 0, 0, 0);
var roughRice = new com('RR=F', 'Rough Rice', 'cwt', 2000, 0, 0, 0, 0, 0, 0, 0);
var cocoa = new com('CC=F', 'Cocoa', 'MT', 10, 0, 0, 0, 0, 0, 0, 0);
var cotton = new com('CT=F', 'Cotton', 'lb.',50000, 0, 0, 0, 0, 0, 0, 0);
var lumber = new com('LB=F', 'Lumber', '1k board ft', 110, 0, 0, 0, 0, 0, 0, 0);
var leanHogs = new com('LH=F', 'Lean Hogs', 'lb.', 40000, 0, 0, 0, 0, 0, 0, 0);
var feederCattle = new com('FC=F', 'Feeder Cattle', 'lb.', 50000, 0, 0, 0, 0, 0, 0, 0);
var liveCattle = new com('LC=F', 'Live Cattle', 'lb.', 40000, 0, 0, 0, 0, 0, 0, 0);

var agriculture = [wheat, corn, soybeans, oats, roughRice, coffee, orangeJuice, sugar, cocoa, cotton, lumber, leanHogs, feederCattle, liveCattle];

function getCom() {
var comAll = headerAll.concat(metals).concat(energy).concat(agriculture);
var comAllstr = localStorage.getItem('com');
if(comAllstr !== null) {
 comAll = JSON.parse(comAllstr);
 } return comAll;
}

function showCom() {

$("#com").html("");

var comAll = getCom();

var $table = $( "<table></table>" );

for ( var i = 0; i < comAll.length; i++ ) {
    var com1 = comAll[i];
    var $line = $( "<tr></tr>" );
    $line.append( $( "<td></td>" ).html( com1.name ) );
	$line.append( $( "<td></td>" ).html( com1.unit ) );
	$line.append( $( "<td></td>" ).html( com1.contract ) );
	$line.append( $( "<td></td>" ).html( com1.price ) );
	$line.append( $( "<td></td>" ).html( com1.buying ) );
	$line.append( $( "<td></td>" ).html( com1.selling ) );
	$line.append( $( "<td></td>" ).html( com1.quantity ) );
	$line.append( $( "<td></td>" ).html( com1.total ) );
	$line.append( $( "<td></td>" ).html( com1.margin ) );
	$line.append( $( "<td></td>" ).html( com1.pnl ) );
    $table.append( $line );
}
$table.appendTo( $( "#com" ) );
}
showCom();

var symbol = "";
var lastPrice = 0;

$("#gold").click(function(){symbol = 'GC=F'; $("#goods").html('Gold'); $("#price").html("No Price");getData();});
$("#silver").click(function(){symbol = 'SI=F'; $("#goods").html('Silver'); $("#price").html("No Price");getData();});
$("#platinum").click(function(){symbol = 'PL=F'; $("#goods").html('Platinum'); $("#price").html("No Price");getData();});
$("#copper").click(function(){symbol = 'HG=F'; $("#goods").html('Copper'); $("#price").html("No Price");getData();});
$("#crudeOil").click(function(){symbol = 'CL=F'; $("#goods").html('Crude Oil'); $("#price").html("No Price");getData();});
$("#naturalGas").click(function(){symbol = 'NG=F'; $("#goods").html('Natural Gas'); $("#price").html("No Price");getData();});
$("#corn").click(function(){symbol = 'C=F'; $("#goods").html('Corn'); $("#price").html("No Price");getData1();});
$("#oats").click(function(){symbol = 'O=F'; $("#goods").html('Oats'); $("#price").html("No Price");getData1();});
$("#wheat").click(function(){symbol = 'KW=F'; $("#goods").html('Wheat'); $("#price").html("No Price");getData1();});
$("#soybeans").click(function(){symbol = 'S=F'; $("#goods").html('Soybeans'); $("#price").html("No Price");getData1();});
$("#cotton").click(function(){symbol = 'CT=F'; $("#goods").html('Cotton'); $("#price").html("No Price");getData1();});
$("#orangeJuice").click(function(){symbol = 'OJ=F'; $("#goods").html('Orange Juice'); $("#price").html("No Price");getData1();});
$("#sugar").click(function(){symbol = 'SB=F'; $("#goods").html('Sugar'); $("#price").html("No Price");getData1();});
$("#coffee").click(function(){symbol = 'KC=F'; $("#goods").html('Coffee'); $("#price").html("No Price");getData1();});
$("#roughRice").click(function(){symbol = 'RR=F'; $("#goods").html('Rough Rice'); $("#price").html("No Price");getData();});
$("#cocoa").click(function(){symbol = 'CC=F'; $("#goods").html('Cocoa'); $("#price").html("No Price");getData();});
$("#lumber").click(function(){symbol = 'LB=F'; $("#goods").html('Lumber'); $("#price").html("No Price");getData();});
$("#leanHogs").click(function(){symbol = 'LH=F'; $("#goods").html('Lean Hogs'); $("#price").html("No Price");getData1();});
$("#feederCattle").click(function(){symbol = 'FC=F'; $("#goods").html('Feeder Cattle'); $("#price").html("No Price");getData1();});
$("#liveCattle").click(function(){symbol = 'LC=F'; $("#goods").html('Live Cattle'); $("#price").html("No Price");getData1();});


// USD
function getData() {
    var url = "https://query.yahooapis.com/v1/public/yql";
    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + symbol + "')");

    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
        .done(function (data) {
        lastPrice = parseFloat(data.query.results.quote.LastTradePriceOnly);
		$("#price").text("Bid Price: " + lastPrice);
		})
		.fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
            $("#price").text('Request failed: ' + err);
    });
}

// US cents
function getData1() {
    var url = "http://query.yahooapis.com/v1/public/yql";
    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + symbol + "')");

    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
        .done(function (data) {
        lastPrice = Math.round(parseFloat(data.query.results.quote.LastTradePriceOnly) * 100) / 10000;
		$("#price").text("Bid Price: " + lastPrice);
		})
		.fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
            $("#price").text('Request failed: ' + err);
    });
}

//----------------Get Account----------

function getAccount() {
var acc = 50000.00;
var accStr = localStorage.getItem("account");
if(accStr !== null) {
acc = parseFloat(accStr);
}
acc = Math.round( acc * 100) / 100; 
return acc;
}

$("#account").html('Account: US$ ' + getAccount());

function getPnl() {
var pnl = 0;
var pnlStr = localStorage.getItem("pnl");
if(pnlStr !== null) {
pnl = parseFloat(pnlStr);
}
pnl = Math.round( pnl * 100) / 100; 
return pnl;
}

$("#pnl").html( 'Profit/Loss: US$ '+ getPnl() );

//----------------Update Price-------------

$("#update").click(function update() {

var comAll = getCom();

function search() {
for(var i=0; i<comAll.length; i++) {
	if(comAll[i].symbol === symbol) {
		return comAll[i];
  } } }
var comUpdate = search();  
comUpdate.price = lastPrice;  
comUpdate.total = comUpdate.price * comUpdate.contract * comUpdate.quantity;
comUpdate.total = Math.round( comUpdate.total * 100 ) / 100;
comUpdate.margin = Math.round( comUpdate.total * 5 ) / 100;
var comAllstr = JSON.stringify(comAll);
localStorage.setItem("com", comAllstr);
showCom();

});

//---------------Buy----------------------

$("#buy").click(function() {

$("#update").click();
var comAll = getCom();
var acc = getAccount();
var pnl = getPnl();
function search() {
for(var i=0; i<comAll.length; i++) {
	if(comAll[i].symbol === symbol) {
		return comAll[i];
  } } }
var comUpdate = search();

if(comUpdate.quantity === 0) {
comUpdate.quantity ++;
comUpdate.buying = lastPrice;
comUpdate.total = comUpdate.buying * comUpdate.contract * comUpdate.quantity;
comUpdate.margin = comUpdate.total * 0.05;
comUpdate.margin = Math.round( comUpdate.margin * 100 ) / 100;
comUpdate.total = Math.round( comUpdate.total * 100) / 100; 

var comAllstr = JSON.stringify(comAll);
localStorage.setItem("com", comAllstr);
showCom();

acc -= comUpdate.margin;
acc = Math.round( acc * 100) / 100;
localStorage.setItem("account", acc);
$("#account").html('Account: US$ ' + acc);

} else {return false}
});

//---------------Sell-------------

$("#sell").click(function() {

$("#update").click();

var comAll = getCom();

function search() {
for(var i=0; i<comAll.length; i++) {
	if(comAll[i].symbol === symbol) {
		return comAll[i];
  } } }

var comUpdate = search();  
var acc = getAccount();
var pnl = getPnl();

if(comUpdate.quantity > 0) {

comUpdate.quantity --;
comUpdate.selling = lastPrice;
comUpdate.pnl = (comUpdate.selling - comUpdate.buying) * comUpdate.contract;
comUpdate.pnl = Math.round( comUpdate.pnl * 100) / 100;

acc += comUpdate.margin;
acc = Math.round( acc * 100) / 100;
localStorage.setItem("account", acc);
$("#account").html('Account: US$ ' + acc);

pnl += (comUpdate.selling - comUpdate.buying) * comUpdate.contract; 
pnl = Math.round( pnl * 100) / 100; 
localStorage.setItem("pnl", pnl);
$("#pnl").html('Profit/Loss: US$ ' + pnl);

comUpdate.total = comUpdate.selling * comUpdate.contract * comUpdate.quantity;
comUpdate.margin = comUpdate.total * 0.05;
comUpdate.margin = Math.round( comUpdate.margin * 100 ) / 100;
comUpdate.total = Math.round( comUpdate.total * 100) / 100; 
} else {return false}

var comAllstr = JSON.stringify(comAll);
localStorage.setItem("com", comAllstr);
showCom();
});
//---------------Reset-----------------
$("#reset").click(function() {
localStorage.removeItem("com");
localStorage.removeItem("account");
localStorage.removeItem("pnl");
$("#goods").html('No Goods');
$("#price").html('No Price');
$("#account").html('Account: US$ ' + 50000);
$("#pnl").html('Profit/Loss: US$ ' + 0);
showCom();
});

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function date() {
	var d = new Date();
	var day = d.getDate();
	var m = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct","Nov", "Dec"];
	var mI = d.getMonth();
	var year = d.getFullYear();
	var t = d.toLocaleTimeString();
	var a = ' [ ' + day + ' ' + m[mI] + ' ' + year + ' - ' + t + ' ]';
	return a;
} 
 
function add() {
    var today = date();
	var task = document.getElementById('task').value + ' &nbsp ' + today;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
	
    var html = '<ol>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '&nbsp <button class= "remove" id=" ' + i + ' " >x</button></li><br>';
    };
    html += '</ol>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();
