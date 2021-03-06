// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));

  // 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

  function maxOfThree(x, y, z) {
      if (x >= y && x >= z){
          return x;
      } else if(y >= x && y >= z){
          return y;
      } else if(z >= x && z >= y){
          return z;
      }
  }
 console.log(maxOfThree(3, 9, 5))
 


// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

// function isCharAVowel(char){
//   char =chr.toLowerCase();
//   return ('aeiouy'.indexOf(char) > -1)
// }

// console.log(isCharAVowel('T'))


function isCharAVowel(char){
  char = char.toLowerCase();
  return ('aeiouy'.indexOf(char) > -1);
}

console.log(isCharAVowel('A'));


// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

const sumArray = function(arr) {
  let sum = 0;
  arr.forEach(function(n){
    sum += n;
  });
  return sum
};
console.log(sumArray([2, 4, 5]))

// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

console.log(multiplyArray([5, 22, 12]));

function multiplyArray(nums){
  let product = 1;
  nums.forEach(function(n){
    product *= n;
  })
  return product 
}


// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

const numArgs = function(...args) {
  return args.length;
};

console.log(numArgs('test', true, 5));



// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(str){
  return str.split('').reverse().join('');
}

console.log(reverseString(`Dogs`))

// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.

const longestStringInArray = function(arr) {
  let longest = 0; // <== first iteration value !! will change
  arr.forEach((str) => {
      if (str.length > longest) {  // <-- ask about syntax vs solution answer -- connected
          longest = str.length;   // <-- ask about syntax vs solution answer -- connected
      }
  });
  return longest;
};
console.log(longestStringInArray(['hello', 'glasses', 'people', 'states']))

// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.


function stringsLongerThan(arr, length) {
  return arr.filter((str)=>{
    return (str.length > length)
  });

};

console.log(stringsLongerThan(['purple', 'blue', 'orange', 'yellow'], 3))