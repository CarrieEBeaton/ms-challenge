import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleLinkedList } from './double-linked-list';
import { LinkedList } from './linked-list';
import { HashMap } from './hash-table';
import { Node } from './binary-search-tree';
import { Stack } from './stack';
import { Queue } from './queue';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DoubleLinkedList, 
    LinkedList,
    HashMap,
    Node,
    Stack,
    Queue
  ],
  exports: [
    DoubleLinkedList, 
    LinkedList,
    HashMap,
    Node,
    Stack,
    Queue]
})
export class DataStructuresModule {}
