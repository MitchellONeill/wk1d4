
var id = (function () {
  var count = 0;
  return function(){
    count += 1
    return count - 1;
  }
})();

console.log(id.toString()); // 0
console.log(id()); // 1
console.log(id()); // 2
console.log(id()); // 3

/////*****

var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var count = 0;
  //console.log(count);
  return function(){
    count += 1;
    return list[count - 1];
  }
})();
console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6

// /////*****

var countdownGenerator = function (time) {
    time++;
   return function() {
    var response = '';
    time--;
    if (time > 0){
       response = console.log("T-minus " + time + "...");
      }
    if (time==0){
      response = console.log("Blast Off!");
    }
    if (time<0){
      response = console.log("Rockets already gone, bub!");
    }
    return response;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
