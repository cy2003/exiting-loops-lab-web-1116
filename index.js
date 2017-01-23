// function firstNotOne(array) {
//   for (let i = 0, l = array.length; i < l; i++) {
//     if (array[i] !== 1) {
//       return array[i]
//     }
//   }
// }

//python -m SimpleHTTPServer
//this is how you run a server to debug

// breakOut([1, 1, 1, 1, 2, 1, 1], 5, 2)

function breakOut(array, changeValue, stopValue){

  for (let i = 0, l = array.length; i < l; i++){
    if (array[i] === stopValue) {
      break
    }
    else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0, l = array.length; i < l; i++){
    if (array[i] === skipValue) {
      continue
    }
    else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++){
    if (findFn(array[i])){
      return array[i]
    }
  }
}
