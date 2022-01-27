function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return [];
  }

  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);

  const result = selectionSortRecursive(arr);
  result.unshift(min);
  return result;
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
