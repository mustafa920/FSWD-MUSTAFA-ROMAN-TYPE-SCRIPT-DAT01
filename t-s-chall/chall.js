for (var _i = 0, resto_1 = resto; _i < resto_1.length; _i++) {
    var value = resto_1[_i];
    document.getElementById('demo').innerHTML += "<div id='main'><div id='name'><span>" + value.name + " $" + "<br><div><button class='click1'>👍</button><button class='click2'>👎</button><p class='result1'></p></div>" + "<br>" + "</span> <div id='like'><span class='result'>" +
        value.quantity + "</span>  <button class='click'>Add</button></div><div id='img'></div><img id='img' src='" + value.image +
        "'width='350' height='250'></div><div></div><hr>";
}
function add(quantity, c) {
    var sum = quantity + 1;
    document.getElementsByClassName("result")[c].innerHTML = sum;
}
var _loop_1 = function (x) {
    document.getElementsByClassName('click')[x].onclick = function () {
        add(resto[x].quantity, x);
    };
};
for (var x = 0; x < resto.length; x++) {
    _loop_1(x);
}
function like(like, c) {
    var a = "😁 thank you";
    document.getElementsByClassName("result1")[c].innerHTML = a;
}
var _loop_2 = function (x) {
    document.getElementsByClassName('click1')[x].onclick = function () {
        like(resto[x].like, x);
    };
};
for (var x = 0; x < resto.length; x++) {
    _loop_2(x);
}
function dislike(dislike, d) {
    var m = "😭 fuck you";
    document.getElementsByClassName("result1")[d].innerHTML = m;
}
var _loop_3 = function (x) {
    document.getElementsByClassName('click2')[x].onclick = function () {
        dislike(resto[x].dislike, x);
    };
};
for (var x = 0; x < resto.length; x++) {
    _loop_3(x);
}
