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

//console.log(getMaxWaterContainer(heightsArray));
const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const getTrappedRainwater = (heights) => {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let maxLeft = 0;
    let maxRight = 0;
    let leftP = p;
    let rightP = p;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }
    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    let currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  console.log(totalWater);
  return totalWater;
};

console.log(getTrappedRainwater(elevationArray));
