import { Component } from '@angular/core';
import { BinarySearch } from 'libs/alogrithms/src/lib/binary-search';
import { BubbleSort } from 'libs/alogrithms/src/lib/bubble-sort';
import { DepthFirstSearch } from 'libs/alogrithms/src/lib/depth-first-search';
import { MergeSort } from 'libs/alogrithms/src/lib/merge-sort';
import { QuickSort } from 'libs/alogrithms/src/lib/quick-sort';

@Component({
  selector: 'ms-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private depthFirstSearch: DepthFirstSearch,
    private binarySearch: BinarySearch,
    private bubbleSort: BubbleSort,
    private quickSort: QuickSort,
    private mergeSort: MergeSort) {

    // const array = [2, 3, 4, 7, 9, 113];
    // const index = binarySearch.binarySearch(array, 5);

    // console.log(array[index]);
    const result = depthFirstSearch.letterCombinations('23');
    console.log(result);
  }

  binarySearchTesting() {
    const array = [2, 3, 4, 7, 9, 113];
    const index = this.binarySearch.binarySearch(array, 5);

    // returns the index of array when found or -1 if not found
    console.log(array[index]);
  }

  mergeSortTesting() {
    const newArray = this.mergeSort.mergeSort([2, 1000, 1, 7, 5006, 113, 1]);

    newArray.forEach(element => {
      console.log(element);
    });
  }

  quickSortTesting() {
    const newArray = this.quickSort.quickSort([2, 1000, 1, 7, 5006, 113, 1]);
    newArray.forEach(element => {
      console.log(element);
    });
  }

  bubbleSortTesting() {
    const newArray = this.bubbleSort.bubbleSort([2, 1000, 1, 7, 5006, 113, 1]);

    newArray.forEach(element => {
      console.log(element);
    });
  }
}
