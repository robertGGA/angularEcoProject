import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
