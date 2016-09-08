// function findWaldo(arr, i) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

var list = ["Alice", "Bob", "Waldo", "Winston"];
list.forEach(function findWaldo(element, i, array){
  if (element == "Waldo") {
    actionWhenFound(element, i);
  }
})

function actionWhenFound(element, idx) {
  console.log("Found " + element + " at Index: " + idx);
}

