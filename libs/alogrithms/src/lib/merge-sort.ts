import { Injectable, Pipe } from "@angular/core";

@Pipe({ name: 'MergeSort'})
@Injectable({
  providedIn: 'root',
})
export class MergeSort {
  // left array and right array are sorted
  merge = (leftArray: number[], rightArray: number[])  => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      const leftElement = leftArray[leftIndex];
      const rightElement = rightArray[rightIndex];

      if(leftElement < rightElement) {
        output.push(leftElement);
        leftIndex++;
      } else {
        output.push(rightElement);
        rightIndex++;
      }
    }

    // in some cases not all of the left or right elements got put into the array so copy them into the index
    // if we already used all it just gives nothing
    return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]
  }

  mergeSort = (array: number[]) => {
    if(array.length <= 1) {
      // edge case - if the array is empty or equals 1 then return the array
      return array;
    }
    // Get the middle of the array
    let middle: number = Math.floor(array.length) / 2;
    const leftArray = array.slice(0, middle);   // get the left-hand side of the array
    const rightArray = array.slice(middle); // get the right-hand side of the array

    // call the merge halves function weher it takes the left hand side, sorts it
    // and the right hand hand side and sorts it and returns the array
    return this.merge(
      this.mergeSort(leftArray),
      this.mergeSort(rightArray)
    )
  }
}

//don't forget base case if the arr.lenght less 1 return
// get middle math.floor (arra.length - 1) /2
// left arr.slice(0,middle)
// right arr.slice(middel)


// mergesort
// take in a left array and a right array
// create an output
// create an index for the left and right = 0
// if the arra leftindes < array right index 
// out push(left element)

// otherwise push the right element
