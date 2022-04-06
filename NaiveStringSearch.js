// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162778#overview

// Define a function that takes in the string and pattern
// Loop over the longer string
// Loop over the shorter string
// if characters dont match break out of the inner loop
// if characters do match, keep going
// if you complete the iner loop and find a match, increment the count of matches
// return the count

const naiveSearch = (str, pattern) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
        console.log(pattern[j], str[i+j])
        if (pattern[j] !== str[i+j]) {
            console.log('BREAK')
            break;
        }
        if (j === pattern.length - 1) {
            console.log('found one')
        count++
        }
    }
  }
  return count ;
};

console.log(naiveSearch("laurel loled alol lo lol", "lol"));
