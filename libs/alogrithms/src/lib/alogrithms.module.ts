import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSort } from './merge-sort';
import { QuickSort } from './quick-sort';
import { BubbleSort } from './bubble-sort';
import { BinarySearch } from './binary-search';
import { DepthFirstSearch } from './depth-first-search';
import { DepthFirstSearchMatrix } from './dfs-matrix';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MergeSort,
    QuickSort,
    BubbleSort,
    BinarySearch,
    DepthFirstSearch,
    DepthFirstSearchMatrix
  ],
  exports: [
    MergeSort,
    QuickSort,
    BubbleSort,
    BinarySearch,
    DepthFirstSearch,
    DepthFirstSearchMatrix
  ]
})
export class AlogrithmsModule {}
