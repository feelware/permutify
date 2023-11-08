export default function getPermutations(arr) {
    console.log(arr)
    if (arr.length === 1) {
      return [arr];
    }
  
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const remainingPermutations = getPermutations(remaining);
  
      for (let j = 0; j < remainingPermutations.length; j++) {
        result.push([current].concat(remainingPermutations[j]));
      }
    }
  
    return result;
}