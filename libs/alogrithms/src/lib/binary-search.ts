import { Injectable, Pipe } from "@angular/core";

@Pipe({ name: 'BinarySearch' })
@Injectable({
  providedIn: 'root',
})
export class BinarySearch {

  // must always operate on something that is sorted

  search = (array: number[], val: number): boolean => {
    for(let i = 0; i < array.length; i++) {
      if (val === array[i]) {
        return true;
      }
    }
    return false;
  }

  binarySearch = (array: number[], val: number): number => {
    let left = 0;
    let right = array.length - 1;
  
    while(left <= right) {
      let middle: number = left + Math.floor((right - left)/ 2);
      if (array[middle] === val) {
        return middle;
      }

      if (val < array[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
  }
}

