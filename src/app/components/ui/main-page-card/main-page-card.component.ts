import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-card',
  templateUrl: './main-page-card.component.html',
  styleUrls: ['./main-page-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageCardComponent implements OnInit {
	@Input() title: string
	@Input() text: string
	@Input() bgImg: string
	@Input() link: string

  constructor() {
		this.title = '';
		this.text = '';
		this.bgImg = '';
		this.link = '';
  }

  ngOnInit(): void {
  }

}
