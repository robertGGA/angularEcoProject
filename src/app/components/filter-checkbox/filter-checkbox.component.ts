import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterCheckboxComponent {
	@Input() id:string="";
	@Input() name:string="";
}
