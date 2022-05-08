import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
