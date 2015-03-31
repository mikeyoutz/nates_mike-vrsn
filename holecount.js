//http://www.codechef.com/problems/HOLES

var holes = (function(lookup){
  return function (text){
    return text
      .split("")
      .map(function(char){ return lookup[char] || 0 })
      .reduce(function(prev, curr){ return prev + curr }, 0)
  }
})({
  0: 1, 4: 1, 6: 1 , 8: 2, 9: 1 // numbers
, a: 1, b: 1, d: 1, e: 1, g: 1, o: 1, p: 1, q: 1 // lowercase
, A: 1, B: 2, D: 1, O: 1, P: 1, Q: 1 // uppercase
});

holes("CodeChef"); // 4
holes("CodeChef: Take part in our 10 day long monthly coding contest"); // 20

holes('All submissions for this problem are available.\n\nChef wrote some text on a piece of paper and now he wants to know how many holes are in the text. What is a hole? If you think of the paper as the plane and a letter as a curve on the plane, then each letter divides the plane into regions. For example letters "A", "D", "O", "P", "R" divide the plane into two regions so we say these letters each have one hole. Similarly, letter "B" has two holes and letters such as "C", "E", "F", "K" have no holes. We say that the number of holes in the text is equal to the total number of holes in the letters of the text. Help Chef to determine how many holes are in the text.\nInput\n\nThe first line contains a single integer T <= 40, the number of test cases. T test cases follow. The only line of each test case contains a non-empty text composed only of uppercase letters of English alphabet. The length of the text is less then 100. There are no any spaces in the input.\nOutput\n\nFor each test case, output a single line containing the number of holes in the corresponding text.\nExample\n\nInput:\n2\nCODECHEF\nDRINKEATCODE\n\nOutput:\n2\n5'); // 319