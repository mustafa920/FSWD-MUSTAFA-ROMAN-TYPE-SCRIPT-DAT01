console.log("hello world");

	

let map = new Map()
.set("A",1)
.set("B",2)
.set("C",3);
console.log(map.get("A"));


function identity(data: any) {
   return data;
}

console.log(identity("Max"));
console.log(identity(27));
console.log(identity({name: "Max", age: 27}));

	
	function hello() {
   var a = "first text";
   for (var i = 0; i < 10; i++) {
       var a = "second text";
   }
   document.write(a);
}
hello();



var funcs = [];
for (var i = 0; i < 5; i += 1) {
   let y = i;
   funcs.push(function() {
       console.log(y);
   })
}
funcs.forEach(function(func) {
   func()
});

const foo = {};
foo['prop'] = "Moo"; // This works!
console.log(foo);


var funcs = [];
for (var i = 0; i < 5; i += 1) {
   var y = i;
   funcs.push(function() {
       document.write("y="+y);
   })
}

funcs.forEach(function(func) {
   func()
});