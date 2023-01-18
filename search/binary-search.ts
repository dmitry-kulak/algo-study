export const binarySearchHas = (nums: number[], num: number): boolean => {
  let lo = 0;
  let hi = nums.length;
  while (lo < hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    if (nums[m] === num) {
      return true;
    } else if (nums[m] > num) {
      hi = m;
    } else {
      lo = m + 1;
    }
  }

  return false;
};

export const binarySearch = (nums: number[], num: number): number => {
  let lo = 0;
  let hi = nums.length;
  while (lo < hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    if (num > nums[m]) {
      lo = m + 1;
    } else {
      hi = m;
    }
  }

  return nums[lo] === num ? lo : -1;
};
