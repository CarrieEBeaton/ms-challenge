import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ms-challenge/api-interfaces';
import { MergeSort } from 'libs/alogrithms/src/lib/merge-sort';

@Component({
  selector: 'ms-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient, mergeSort: MergeSort) {
    mergeSort.mergesort([2, 3, 7, 1]);

  }
}
