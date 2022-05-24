import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
	@Input() imgUrl:string="";
	@Input() brand:string="";
	@Input() productName:string="";
	@Input() productType:string="";
	@Input() cost:string="";

}
