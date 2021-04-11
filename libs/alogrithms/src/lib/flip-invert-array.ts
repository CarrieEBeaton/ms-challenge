function flipAndInvertImage(image: number[][]): number[][] {

  let reversed = reverseRow(image);
  let inverted = invert(reversed);
  console.log(inverted);
  return inverted;
};

function invert(image: number[][]): number[][] {
  console.log(image);
  for (let i = 0; i < image.length; i++) {
    const arr: number[] = image[i];
    let end = arr.length - 1;
    for (let j = 0; j <= end; j++) {
      image[i][j] = image[i][j] === 0 ? 1 : 0;
    }
  }
  return image;
}

function reverseRow(image: number[][]): number[][] {

  for (let i = 0; i < image.length; i++) {

    const arr: number[] = image[i];
    let end = arr.length - 1;
    let start = 0;

    while (start < end) {
      const temp = image[i][start];
      image[i][start] = image[i][end];
      image[i][end] = temp;
      start++;
      end--;
    }

  }

  return image;
}

// flip image horizonally and then invert it a