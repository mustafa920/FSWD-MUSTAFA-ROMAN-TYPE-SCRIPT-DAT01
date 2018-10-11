for (var value of resto) { 
    document.getElementById('demo').innerHTML += "<div id='main'><div id='name'><span>" + value.name +" $"+"<br><div><button class='click1'>👍</button><button class='click2'>👎</button><p class='result1'></p></div>" +"<br>"+"</span> <div id='like'><span class='result'>" +
     value.quantity + "</span>  <button class='click'>Add</button></div><div id='img'></div><img id='img' src='" + value.image +
         "'width='350' height='250'></div><div></div><hr>";

}
 function add(quantity, c:number) {
     var sum = quantity + 1;
     document.getElementsByClassName("result")[c].innerHTML = sum;
 }

 for (let x = 0; x < resto.length; x++) {
     document.getElementsByClassName('click')[x].onclick = function() {
         add(resto[x].quantity, x);
     }
 }

function like(like, c) {
      const a :string = "😁 thank you";
     document.getElementsByClassName("result1")[c].innerHTML = a;
 }

 for (let x = 0; x < resto.length; x++) {
     document.getElementsByClassName('click1')[x].onclick = function() {
         like(resto[x].like, x);
     }
 }
 function dislike(dislike, d) {
      const m :string = "😭 fuck you";
     document.getElementsByClassName("result1")[d].innerHTML = m;
 }

 for (let x = 0; x < resto.length; x++) {
     document.getElementsByClassName('click2')[x].onclick = function() {
         dislike(resto[x].dislike, x);
     }
 }
