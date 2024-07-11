let numbers = [2, 7, 11, 15];
let target = 9;

function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  if (target <= 0) return [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    for (let j = 0; j < i; j++) {
      if (num + numbers[j] === target) {
        return [j, i];
      }
    }
  }

  return [];
}

let result = twoSum(numbers, target);
console.log(result);
