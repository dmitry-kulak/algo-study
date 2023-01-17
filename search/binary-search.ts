const binarySearch = (haystack: number[], needle: number): boolean => {
  let lo = 0;
  let hi = haystack.length;
  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
};


const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArr, 1));
console.log(binarySearch(sortedArr, 5));
console.log(binarySearch(sortedArr, 7));
console.log(binarySearch(sortedArr, 9));
console.log(binarySearch(sortedArr, 10));
console.log(!binarySearch(sortedArr, 11));
console.log(!binarySearch(sortedArr, -1));