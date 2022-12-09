const heightsArray = [4, 8, 1, 2, 3, 9];

// const getMaxWaterContainer = function (heights) {
//   let maxArea = 0;

//   for (let p1 = 0; p1 < heights.length; p1++) {
//     console.log(p1);
//     for (let p2 = p1 + 1; p2 < heights.length; p2++) {
//       const height = Math.min(heights[p1], heights[p2]);
//       const width = p2 - p1;
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//     }
//   }
// };

// console.log(getMaxWaterContainer(heightsArray));

//Two pointers technique

const getMaxWaterContainer = function (heights) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = heights.length - 1;

  while (p1 < p2) {
    let length = Math.min(heights[p1], heights[p2]);
    let width = p2 - p1;
    let area = length * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

console.log(getMaxWaterContainer(heightsArray));
