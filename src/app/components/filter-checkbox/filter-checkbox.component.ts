import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.sass'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() =>FilterCheckboxComponent),
			multi: true
		}
	],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterCheckboxComponent implements ControlValueAccessor {

	isChecked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	onChange = (isChecked:boolean)=>{};

	@Input() name:string="";
	onTouched = () => {};

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	changeState(): void{
		this.isChecked.next(!this.isChecked.value) ;
		this.onChange(this.isChecked.value);
	}

	registerOnTouched(onTouched: any) {
		this.onTouched = onTouched;
	}

	writeValue(isChecked: boolean): void {
		console.log(isChecked,this.name)
		this.isChecked.next(isChecked);
	}
}
