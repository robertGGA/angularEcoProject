import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductFilterService } from '@services/product-filter.service';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
	formGroup: FormGroup

	constructor(
		formBuilder: FormBuilder,
		filterService: ProductFilterService) {
		let filtersList = filterService.getFiltersList();
		this.formGroup = formBuilder.group({
			genderGroup: formBuilder.group(
				{
					manCheckbox: [false],
					womanCheckbox: [false]
				}
			),
			typeGroup:
				formBuilder.group({
					selectAll: [false],
					shoes: [false],
					clothing: [false],
					accessories: [false],
				}),
			brandGroup:
				formBuilder.group(
				{
					selectAll: [false],
					nike: [false],
					adidas: [false],
					puma: [false],
					samaraJersey: [false],
					rebook: [false],
					hm: [false],
				}),
		})

		this.formGroup.valueChanges.subscribe(value => console.log(value))
		this.formGroup.get("typeGroup")?.get("selectAll")?.valueChanges.subscribe(value=>this.selectAll("typeGroup",value))
		this.formGroup.get("brandGroup")?.get("selectAll")?.valueChanges.subscribe(value=>this.selectAll("brandGroup",value))
	}

	selectAll(groupName: string,isSelect: boolean) {
		console.log("Select all ",groupName)
		Object.keys((<FormGroup>this.formGroup.get(groupName)!).controls).forEach(key => {
			if(key!=="selectAll"){
				this.formGroup.get(groupName)?.get(key)?.setValue(isSelect)
			}
		});
	}

	get types(): FormArray{
		return this.formGroup.get("typeArray") as FormArray
	}

	get brands(): FormArray{
		return this.formGroup.get("brandArray") as FormArray
	}
}
