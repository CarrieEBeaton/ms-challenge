import { Injectable, Pipe } from "@angular/core";

@Pipe({ name: 'QuickSort' })
@Injectable({
  providedIn: 'root',
})
export class QuickSort {

  quickSort(array: number[]) {
    if (array.length <= 1) {
      return array; //edge case
    }
    // base case empty or single item array is reached
    // pivot value ideal middle O logn
    // pivot value not in the middle On2
    const pivot: number = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (const el of array.slice(0, array.length - 1)) {
      el < pivot ? leftArray.push(el) : rightArray.push(el);
    }
    return [...this.quickSort(leftArray), pivot, ...this.quickSort(rightArray)];
  }

}
