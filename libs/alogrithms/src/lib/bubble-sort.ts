import { Injectable, Pipe } from "@angular/core";

@Pipe({ name: 'BubbleSort' })
@Injectable({
  providedIn: 'root',
})
export class BubbleSort {

  bubbleSort(array) {

    const arr =  array.slice(); // shallow copy of array as to not mutate state of original array
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr;
  }

  //O2 - not ideal in the real world very naive and very slow but no extra memory
}