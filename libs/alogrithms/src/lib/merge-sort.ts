import { Pipe } from "@angular/core";

@Pipe({ name: 'MergeSort'})
export class MergeSort {
  mergesort(array: number[]): void {
    // new temp array makes storage more efficient vs creating new object on heap each time
    this.merge(array, [array.length], 0, array.length - 1);
  }

  merge(array: number[], temp: number[], leftStart: number, rightEnd: number) {
    if(leftStart >= rightEnd) {
      return;
    }
    let middle: number = (leftStart + rightEnd) / 2;
    this.merge(array, temp, leftStart, middle);
    this.merge(array, temp, middle + 1, rightEnd);
    this.mergeHalves(array, temp, leftStart, rightEnd);
  }

  mergeHalves(array: number[], temp: number[], leftStart: number, rightEnd: number) {
    let leftEnd: number = (rightEnd + leftStart) / 2;  // essentially the same thing as middle
    let rightStart = leftEnd + 1;
    // let size = rightEnd - leftStart + 1;

    // base case array of only one item

    let left = leftStart;  // left index
    let right = rightStart; // right index
    let index = leftStart; // temporary index

    // walk through each half of the array while elements are still in bounds
    // copy over smaller element, once element goes out of bounds - copy over remainer of elements
    while (left <= leftEnd && right <= rightEnd) {
      if(array[left] <= array[right]) {
        temp[index] = array[left]; // copy into if left is less than right
        left++;
      } else {
        temp[index] = array[right]; // else copy over right element
        right++;
      }
      index++;
    }

    let newArray = [];
    console.log(temp);

    // for(let i = 0; i < leftEnd; i++) {
    //   console.log(temp[i]);
    //   newArray.push(temp[i]);
    // }

    // for(let i = leftStart; i < rightStart; i++) {
    //   newArray.push(temp[i]);
    // }

    // for(let i = 0; i < newArray.length; i++) {
    //   console.log(newArray[i]);
    // }

    return newArray;
  }
}