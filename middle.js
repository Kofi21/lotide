const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false 
  } 
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 Assertation Failed: ${arr1} !== ${arr2}`)
  }
  
}

const middle = function(array) {
  if(array.length <= 2)
  return [];

  const mid = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(mid)]];
  } else {
    return [
    array[mid - 1],
    array [mid]
    ];
  }
}
  console.log(middle([1]));
  console.log(middle([1, 2]));
  console.log(middle([1, 2, 3, 4, 5]));
  console.log(middle([1, 2, 3, 4, 5, 6]));