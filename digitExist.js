/*Create a function that takes an array of numbers and return "Boom!" ,if the digit 7 appears in the array.
  Otherwise, return "there is no 7 in the array".

  sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

  sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

  sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"*/

  function sevenBoom(arr){
    let newStr = arr.join();
    if(newStr.includes("7")){
        console.log("Boom!");
    }
    else{
        console.log("there is no 7 in the array");
    }

  }

  sevenBoom([1, 2, 3, 4, 5, 6, 7])// ➞ "Boom!"

  sevenBoom([8, 6, 373, 100]) // ➞ "there is no 7 in the array"

  sevenBoom([2, 55, 60, 97, 86]) //➞ "Boom!"*/