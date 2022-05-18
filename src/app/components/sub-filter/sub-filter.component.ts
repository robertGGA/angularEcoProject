import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export interface filterSettings {
	group: string,
	name: string,
	id: string,
	flag: boolean
}
@Component({
  selector: 'app-sub-filter',
  templateUrl: './sub-filter.component.html',
  styleUrls: ['./sub-filter.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubFilterComponent{
	@Input() name: string = "default";
	@Input() btnNames: filterSettings[] = []
}
