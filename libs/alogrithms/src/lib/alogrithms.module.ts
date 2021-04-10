import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSort } from './merge-sort';
import { QuickSort } from './quick-sort';
import { BubbleSort } from './bubble-sort';
import { BinarySearch } from './binary-search';
import { DepthFirstSearch } from './depth-first-search';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MergeSort,
    QuickSort,
    BubbleSort,
    BinarySearch,
    DepthFirstSearch
  ],
  exports: [
    MergeSort,
    QuickSort,
    BubbleSort,
    BinarySearch,
    DepthFirstSearch
  ]
})
export class AlogrithmsModule {}
