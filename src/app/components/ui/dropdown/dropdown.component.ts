import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
	isSwitched = false;
	@Input() name = ""

	Switch(){
		this.isSwitched = !this.isSwitched
	}
}
