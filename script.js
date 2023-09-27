"use strict";

/* 1.Write a function that checks if two strings are anagrams of each other (contain the same
characters in a different order). */

const str1 = 'listen';
const str2 = 'silent';

const areAnagrams = (str1,str2)=>{
  let flag = false;
  if(str1.length === str2.length){
    let arr1 = str1.split('').sort().join('');
    let arr2 = str2.split('').sort().join('');
    for(let i = 0; i < arr1.length;i++){
      if(arr1[i] !== arr2[i]){
        return flag;
      }
    }
    return !flag;
  }else{
    return flag;
  }
}
console.log(`The Answer for first Problem is----`);
console.log(areAnagrams(str1, str2)); // Expected Output: true