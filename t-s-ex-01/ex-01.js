var funcs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < funcs.length; i++) {
    var y = i;
    for (let j = 0; j < funcs.length; j++) {
        var t = j;
        var result = i * j;
        document.write(y + " x " + t + " = " + result + "<br>");
    }
    document.write("<hr>");
}
let map = new Map([
    ["C", 1],
    ["D", 2],
    ["E", 3],
    ["F", 4],
    ["G", 5]
]);
for (let [key, value] of map) {
    document.write(key + "  " + value + "<br>");
}
